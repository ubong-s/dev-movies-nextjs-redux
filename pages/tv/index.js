import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { TvList } from '../../components';
import { fetchShows } from '../../features/tv/tvSlice';

const Tv = () => {
   const dispatch = useDispatch();
   const { shows, showsQuery: query } = useSelector((state) => state.tv);

   const [page, setPage] = useState(1);

   useEffect(() => {
      dispatch(fetchShows(query, page));
      window.scroll({ top: 0, behavior: 'smooth' });

      // eslint-disable-next-line
   }, [query, page]);

   return (
      <>
         <Head>
            <title>Television | Dev Movies</title>
            <meta name='description' content='Movies Collection' />
         </Head>
         <TvList data={shows.results} />
      </>
   );
};

export default Tv;
