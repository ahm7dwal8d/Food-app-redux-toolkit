import { configureStore } from "@reduxjs/toolkit";
import Meals from "./mealsSlice"
import Themes from './ThemeSlice'
import Auth from './Auth';

export const store = configureStore({
    reducer: {
        Meals,
        Themes,
        Auth
    }
})