import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   query: 'popular',
   loading: false,
   movies: [],
   error: null,
};

export const fetchMovies = createAsyncThunk(
   'movies/fetchMovies',
   async (query = 'popular', page = 1) => {
      const response = await fetch(
         `https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=${page}`
      );
      const result = await response.json();

      return result;
   }
);

export const moviesSlice = createSlice({
   name: 'movies',
   initialState,
   reducers: {
      updateQuery: (state, action) => {
         state.query = action.payload;
      },
   },

   extraReducers(builder) {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;

            if (action.payload.results) {
               state.movies = action.payload;
            } else {
               state.error = `Error fetching ${state.query} movies`;
            }
         })
         .addCase(fetchMovies.rejected, (state) => {
            state.error = `Error fetching ${state.query} movies`;
         });
   },
});

// Action creators are generated for each case reducer function
export const { updateQuery } = moviesSlice.actions;

export default moviesSlice.reducer;
