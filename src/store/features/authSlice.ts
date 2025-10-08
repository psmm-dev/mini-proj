import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export type Credentials = {
    username: string;
    password: string;
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials: Credentials) => {
    const response = await fetch('/public/users.json');
    const users = await response.json();
    const user = users.find(u => u.username === credentials.username && u.password === credentials.password);
    if (!user) throw new Error('Invalid username or password')
    return user
});

type AuthState = {
    isAuthenticated: boolean;
    user: string | null;
    loading: boolean;
    error: string | null | undefined;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.loading = false;
                state.error = action.error.message;
            })
        }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;