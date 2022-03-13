import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../features/movies/moviesSlice'
import globalReducer from '../features/global/globalSlice'
import tvReducer from '../features/tv/tvSlice'
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    global: globalReducer,
    movies: moviesReducer,
    tv: tvReducer,
    search: searchReducer,
  },
})
