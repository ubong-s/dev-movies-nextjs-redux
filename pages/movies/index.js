import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesList } from '../../components';

import {
   fetchMoviesStart,
   fetchMoviesSuccess,
   fetchMoviesError,
   selectMovies,
   selectQuery,
} from '../../features/movies/moviesSlice';

const Movies = () => {
   const dispatch = useDispatch();
   const query = useSelector(selectQuery);
   const movies = useSelector(selectMovies);
   const [page, setPage] = useState(1);

   const fetchMovies = (query = 'popular', page = 1) => {
      dispatch(fetchMoviesStart());
      axios
         .get(
            `https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=${page}`
         )
         .then((response) => {
            const result = response.data;
            dispatch(fetchMoviesSuccess(result));
         })
         .catch((error) => {
            const errorMsg = `Error fetching ${query} movies`;
            dispatch(fetchMoviesError(errorMsg));
         });
   };

   useEffect(() => {
      fetchMovies(query, page);
      window.scroll({ top: 0, behavior: 'smooth' });
   }, [query, page]);

   return (
      <>
         <Head>
            <title>Movies | Dev Movies</title>
            <meta name='description' content='Movies Collection' />
         </Head>
         {movies?.results && <MoviesList data={movies.results} />}
      </>
   );
};

export default Movies;
