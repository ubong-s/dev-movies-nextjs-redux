import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchQuery: '',
  searchLoading: false,
  searchResults: [],
  searchError: null,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    fetchSearchQueryStart: (state) => {
      state.searchLoading = true
    },
    fetchSearchQuerySuccess: (state, action) => {
      state.searchLoading = false
      state.searchResults = action.payload
    },
    fetchSearchQueryError: (state, action) => {
      state.searchError = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  fetchSearchQueryStart,
  fetchSearchQuerySuccess,
  fetchSearchQueryError,
  updateSearchQuery,
} = searchSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectSearchQuery = (state) => state.search.searchQuery
export const selectSearchLoading = (state) => state.search.searchLoading
export const selectSearchResults = (state) => state.search.searchResults
export const selectSearchError = (state) => state.search.searcError

export default searchSlice.reducer
