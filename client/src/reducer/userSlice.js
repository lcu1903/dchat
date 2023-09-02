import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    username: null,
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userId = action.payload.userId;
            state.username = action.payload.username;
        },
    },
});
export const { setUserInfo } = userSlice.actions;

export const selectUserId = (state) => state.users.userId;
export const selectUserName = (state) => state.users.username;

export default userSlice.reducer;
