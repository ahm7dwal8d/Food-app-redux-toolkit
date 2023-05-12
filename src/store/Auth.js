import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    name: 'Auth',
    initialState: { name: null, mail: null, password: null },
    reducers: {
        updateAuth: (state, action) => {
            console.log(state, action)
        }
    }
})


export const { updateAuth } = AuthSlice.actions;
export default AuthSlice.reducer;