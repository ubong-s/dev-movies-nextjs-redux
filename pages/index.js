import Head from 'next/head';
import { Hero, MoviesHome } from '../components';

export default function Home({ upcoming, movies, tv }) {
   const upcomingMovies = upcoming?.results.slice(0, 5);
   const popularMovies = movies?.results.slice(0, 10);
   const popularShows = tv?.results.slice(0, 10);
   return (
      <div>
         <Head>
            <title>Home | Dev Movies</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <Hero slides={upcomingMovies} />
         <MoviesHome data={popularMovies} titleEnd='movies' />
         <MoviesHome data={popularShows} titleEnd='shows' />
      </div>
   );
}

export const getStaticProps = async () => {
   const response1 = fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
   ).then((res) => res.json());

   const response2 = fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
   ).then((res) => res.json());

   const response3 = fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=1`
   ).then((res) => res.json());

   const [upcoming, movies, tv] = await Promise.all([
      response1,
      response2,
      response3,
   ]);

   return {
      props: {
         upcoming,
         movies,
         tv,
         revalidate: 10,
      },
   };
};
