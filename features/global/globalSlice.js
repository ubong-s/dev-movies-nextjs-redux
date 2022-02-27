import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   menuOpen: false,
   darkMode: true,
};

export const globalSlice = createSlice({
   name: 'global',
   initialState,
   reducers: {
      toggleMenu: (state) => {
         state.menuOpen = !state.menuOpen;
      },
      closeMenu: (state) => {
         state.menuOpen = false;
      },
      toggleTheme: (state) => {
         state.darkMode = !state.darkMode;
      },
   },
});

// Action creators are generated for each case reducer function
export const { toggleMenu, closeMenu, toggleTheme } = globalSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectMenuOpen = (state) => state.global.menuOpen;
export const selectDarkMode = (state) => state.global.darkMode;

export default globalSlice.reducer;
