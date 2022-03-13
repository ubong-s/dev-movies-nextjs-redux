import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menuOpen: false,
  darkMode: true,
  searchOpen: false,
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen
    },
    closeMenu: (state) => {
      state.menuOpen = false
    },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode
    },
    toggleSearchForm: (state) => {
      state.searchOpen = !state.searchOpen
    },
    closeSearchForm: (state) => {
      state.searchOpen = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  toggleMenu,
  closeMenu,
  toggleTheme,
  toggleSearchForm,
  closeSearchForm,
} = globalSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectMenuOpen = (state) => state.global.menuOpen
export const selectDarkMode = (state) => state.global.darkMode
export const selectSearchOpen = (state) => state.global.searchOpen

export default globalSlice.reducer
