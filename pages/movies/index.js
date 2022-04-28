import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesList } from '../../components';
import { fetchMovies } from '../../features/movies/moviesSlice';

const Movies = () => {
   const dispatch = useDispatch();
   const [page, setPage] = useState(1);
   const { query, movies } = useSelector((state) => state.movies);

   useEffect(() => {
      dispatch(fetchMovies(query, page));
      window.scroll({ top: 0, behavior: 'smooth' });
   }, [query, page]);

   return (
      <>
         <Head>
            <title>Movies | Dev Movies</title>
            <meta name='description' content='Movies Collection' />
         </Head>
         <MoviesList data={movies.results} />
      </>
   );
};

export default Movies;
