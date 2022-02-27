import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/moviesSlice';
import globalReducer from '../features/global/globalSlice';
import tvReducer from '../features/tv/tvSlice';

export const store = configureStore({
   reducer: {
      global: globalReducer,
      movies: moviesReducer,
      tv: tvReducer,
   },
});
