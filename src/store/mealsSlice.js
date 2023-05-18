import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMeals = createAsyncThunk(
    'meals/getMeals',
    async (_, { rejectWithValue }) => { 
        try { 
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err.message)
            return rejectWithValue(err.message)
        }
    }
)
export const getCategories = createAsyncThunk(
    'meals/getCategories',
    async (_, { rejectWithValue }) => { 
        try { 
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await res.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)
export const getDetails = createAsyncThunk(
    'meals/getDetails',
    async (id, { rejectWithValue }) => { 
        try { 
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await res.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)
export const searchMeals = createAsyncThunk(
    'meals/searchMeals',
    async (mealName, { rejectWithValue }) => { 
        console.log(mealName)
        try { 
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err.message)
            return rejectWithValue(err.message)
        }
    }
)
export const getMealbyCategories = createAsyncThunk(
    'meals/getMealbyCategories',
    async (mealName, { rejectWithValue }) => { 
        try { 
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealName}`);
            const data = await res.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

export const getRandomMeal = createAsyncThunk(
    'meals/getRandomMeal',
    async (_, { rejectWithValue }) => {
        try { 
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const data = await res.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const mealsSlice = createSlice({
    name: 'meals',
    initialState: { data: null, isLoading: false, isError: null, cate: null, Auth: false, name: null, randomMeal: null },
    reducers: {
        setAuth: (state, action) => {
            state.name = action.payload;
            state.Auth = true;
        }
    },
    extraReducers: {
        // getMeals 
        [getMeals.pending]: (state) => {
            state.isLoading = true;
        },
        [getMeals.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [getMeals.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload; 
            console.log(action.payload)
        },
        // getCategories
        [getCategories.pending]: (state) => {
            state.isLoading = false;
            state.isLoading = true;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [getCategories.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload; 
        },
        // Get Details 
        [getDetails.pending]: (state) => {
            state.isLoading = true;
        },
        [getDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [getDetails.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload; 
        },
        // Search Meals 
        [searchMeals.pending]: (state) => {
            state.isLoading = true;
        },
        [searchMeals.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [searchMeals.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload; 
        },
        // getMeal By Categories 
        [getMealbyCategories.pending]: (state) => {
            state.isLoading = true;
        },
        [getMealbyCategories.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        [getMealbyCategories.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload; 
        },
        // Get Random Meal
        [getRandomMeal.pending]: (state) => {
            state.isLoading = true;
        },
        [getRandomMeal.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.randomMeal = action.payload;
        },
        [getRandomMeal.rejected]: (state, action) => { 
            state.isLoading = false;
            state.isError = action.payload;
        }
    }
})


export const { setAuth } = mealsSlice.actions;
export default mealsSlice.reducer;