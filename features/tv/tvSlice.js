import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showsQuery: 'popular',
  showsLoading: false,
  shows: [],
  showsError: null,
}

export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    updateShowsQuery: (state, action) => {
      state.showsQuery = action.payload
    },
    fetchShowsStart: (state) => {
      state.showsLoading = true
    },
    fetchShowsSuccess: (state, action) => {
      state.showsLoading = false
      state.shows = action.payload
    },
    fetchShowsError: (state, action) => {
      state.showsError = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  fetchShowsStart,
  fetchShowsSuccess,
  fetchShowsError,
  updateShowsQuery,
} = tvSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectShowsQuery = (state) => state.tv.showsQuery
export const selectShowsLoading = (state) => state.tv.showsLoading
export const selectShows = (state) => state.tv.shows
export const selectShowsError = (state) => state.tv.showsError

export default tvSlice.reducer
