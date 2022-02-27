import Head from 'next/head';
import { OverviewSection, CastSection, SimilarSection } from '../../components';
import { shuffleArray } from '../../utils/helpers';

const SingleMoviePage = ({ movie, cast, similarMovies }) => {
   const { title, name, overview } = movie;
   const topCast = cast
      .filter((item) => item.known_for_department.toLowerCase() === 'acting')
      .slice(0, 10);

   similarMovies = shuffleArray(similarMovies).slice(0, 4);

   return (
      <>
         <Head>
            <title>{title ? title : name} | Dev Movies</title>
            <meta name='description' content={overview} />
            <link rel='icon' href={'/favicon.ico'} />
         </Head>
         <OverviewSection movie={movie} />
         <CastSection topCast={topCast} />
         <SimilarSection movies={similarMovies} slugPre='movies' />
      </>
   );
};

export default SingleMoviePage;

export const getServerSideProps = async (context) => {
   const movie_id = context.params.id;

   const response1 = fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`
   ).then((res) => res.json());

   const response2 = fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`
   ).then((res) => res.json());

   const response3 = fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
   ).then((res) => res.json());

   const [movie, credits, similar] = await Promise.all([
      response1,
      response2,
      response3,
   ]);

   return {
      props: {
         movie,
         cast: credits.cast,
         similarMovies: similar.results,
      },
   };
};
