import { createSlice } from "@reduxjs/toolkit";


const ThemeSlice = createSlice({
    name: 'Theme',
    initialState: { theme: 'light' },
    reducers: {
        switchTheme: (state) => {
            state.theme === 'light' ? state.theme = 'dark' :  state.theme = 'light';
            if (state.theme === 'light') {
                state.color = '#000';
                state.bg = '#fff'
            } else {
                state.color = '#fff';
                state.bg = '#0F172A'
            }
        }
    }
})

export const { switchTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer