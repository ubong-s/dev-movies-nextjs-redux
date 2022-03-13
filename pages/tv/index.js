import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { Loading, Error, TvList } from '../../components'
import {
  fetchShowsStart,
  fetchShowsSuccess,
  fetchShowsError,
  selectShowsError,
  selectShowsLoading,
  selectShows,
  selectShowsQuery,
} from '../../features/tv/tvSlice'

const Tv = () => {
  const dispatch = useDispatch()
  const loading = useSelector(selectShowsLoading)
  const shows = useSelector(selectShows)
  const error = useSelector(selectShowsError)
  const query = useSelector(selectShowsQuery)
  const [page, setPage] = useState(1)

  const fetchShows = async (query = 'popular', page = 1) => {
    dispatch(fetchShowsStart())
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=${page}`
      )

      const result = await response.json()
      dispatch(fetchShowsSuccess(result))
    } catch (error) {
      const errorMsg = `Error fetching ${query} shows`
      dispatch(fetchShowsError(error.message))
    }
  }

  useEffect(() => {
    fetchShows(query, page)
    window.scroll({ top: 0, behavior: 'smooth' })

    // eslint-disable-next-line
  }, [query, page])

  return (
    <>
      <Head>
        <title>Television | Dev Movies</title>
        <meta name='description' content='Movies Collection' />
      </Head>
      {shows?.results && <TvList data={shows.results} />}
    </>
  )
}

export default Tv
