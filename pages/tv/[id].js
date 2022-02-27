import Head from 'next/head';
import { OverviewSection, CastSection, SimilarSection } from '../../components';
import { shuffleArray } from '../../utils/helpers';

const SingleTvPage = ({ show, cast, similarShows }) => {
   const { title, name, overview } = show;
   const topCast = cast
      .filter((item) => item.known_for_department.toLowerCase() === 'acting')
      .slice(0, 10);

   similarShows = shuffleArray(similarShows).slice(0, 4);

   return (
      <div>
         <Head>
            <title>{title ? title : name} | Dev Movies</title>
            <meta name='description' content={overview} />
            <link rel='icon' href={'/favicon.ico'} />
         </Head>
         <OverviewSection movie={show} />
         <CastSection topCast={topCast} />
         <SimilarSection movies={similarShows} slugPre='tv' />
      </div>
   );
};

export default SingleTvPage;

export const getServerSideProps = async (context) => {
   const tv_id = context.params.id;

   const response = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`
   );

   const response1 = fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`
   ).then((res) => res.json());

   const response2 = fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US`
   ).then((res) => res.json());

   const response3 = fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
   ).then((res) => res.json());

   const [show, credits, similar] = await Promise.all([
      response1,
      response2,
      response3,
   ]);

   const data = await response.json();

   return {
      props: {
         show,
         cast: credits.cast,
         similarShows: similar.results,
      },
   };
};
