import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   query: 'popular',
   loading: false,
   movies: [],
   error: null,
};

export const moviesSlice = createSlice({
   name: 'movies',
   initialState,
   reducers: {
      updateQuery: (state, action) => {
         state.query = action.payload;
      },
      fetchMoviesStart: (state) => {
         state.loading = true;
      },
      fetchMoviesSuccess: (state, action) => {
         state.loading = false;
         state.movies = action.payload;
      },
      fetchMoviesError: (state, action) => {
         state.error = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const {
   fetchMoviesStart,
   fetchMoviesSuccess,
   fetchMoviesError,
   updateQuery,
} = moviesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectQuery = (state) => state.movies.query;
export const selectLoading = (state) => state.movies.loading;
export const selectMovies = (state) => state.movies.movies;
export const selectError = (state) => state.movies.error;

export default moviesSlice.reducer;
