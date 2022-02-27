import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, Error, TvList } from '../../components';
import {
   fetchShowsStart,
   fetchShowsSuccess,
   fetchShowsError,
   selectError,
   selectLoading,
   selectShows,
   selectQuery,
} from '../../features/tv/tvSlice';

const Tv = () => {
   const dispatch = useDispatch();
   const loading = useSelector(selectLoading);
   const shows = useSelector(selectShows);
   const error = useSelector(selectError);
   const query = useSelector(selectQuery);
   const [page, setPage] = useState(1);

   const fetchShows = (query = 'popular', page = 1) => {
      dispatch(fetchShowsStart());
      axios
         .get(
            `https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=${page}`
         )
         .then((response) => {
            const results = response.data;
            dispatch(fetchShowsSuccess(results));
         })
         .catch((error) => {
            const errorMsg = `Error fetching ${query} shows`;
            dispatch(fetchShowsError(errorMsg));
         });
   };

   useEffect(() => {
      fetchShows(query, page);
      window.scroll({ top: 0, behavior: 'smooth' });
   }, [query, page]);

   return (
      <>
         <Head>
            <title>Television | Dev Movies</title>
            <meta name='description' content='Movies Collection' />
         </Head>
         {shows?.results && <TvList data={shows.results} />}
      </>
   );
};

export default Tv;
