import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   query: 'popular',
   loading: false,
   shows: [],
   error: null,
};

export const tvSlice = createSlice({
   name: 'tv',
   initialState,
   reducers: {
      updateQuery: (state, action) => {
         state.query = action.payload;
      },
      fetchShowsStart: (state) => {
         state.loading = true;
      },
      fetchShowsSuccess: (state, action) => {
         state.loading = false;
         state.shows = action.payload;
      },
      fetchShowsError: (state, action) => {
         state.error = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const {
   fetchShowsStart,
   fetchShowsSuccess,
   fetchShowsError,
   updateQuery,
} = tvSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectQuery = (state) => state.tv.query;
export const selectLoading = (state) => state.tv.loading;
export const selectShows = (state) => state.tv.shows;
export const selectError = (state) => state.tv.error;

export default tvSlice.reducer;
