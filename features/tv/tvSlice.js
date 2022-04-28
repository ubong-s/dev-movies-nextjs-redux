import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
   showsQuery: 'popular',
   showsLoading: false,
   shows: [],
   showsError: null,
};

export const fetchShows = createAsyncThunk(
   'tv/fetchShows',
   async (query = 'popular', page = 1) => {
      const response = await fetch(
         `https://api.themoviedb.org/3/tv/${query}?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}&language=en-US&page=${page}`
      );

      const result = await response.json();

      return result;
   }
);

export const tvSlice = createSlice({
   name: 'tv',
   initialState,
   reducers: {
      updateShowsQuery: (state, action) => {
         state.showsQuery = action.payload;
      },
   },

   extraReducers(builder) {
      builder
         .addCase(fetchShows.pending, (state) => {
            state.showsLoading = true;
         })
         .addCase(fetchShows.fulfilled, (state, action) => {
            state.showsLoading = false;

            if (action.payload.results) {
               state.shows = action.payload;
            } else {
               state.showsError = `Error fetching ${state.showsQuery} shows`;
            }
         })
         .addCase(fetchShows.rejected, (state, action) => {
            state.showsError = `Error fetching ${showQuery} shows`;
         });
   },
});

// Action creators are generated for each case reducer function
export const { updateShowsQuery } = tvSlice.actions;

export default tvSlice.reducer;
