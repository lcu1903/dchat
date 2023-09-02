import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userChatId: null,
    userChatName: null,
};

export const userChatSlice = createSlice({
    name: 'userChat',
    initialState,
    reducers: {
        setUserChatInfo: (state, action) => {
            state.userChatId = action.payload.userChatId;
            state.userChatName = action.payload.userChatName;
        },
    },
});
export const { setUserChatInfo } = userChatSlice.actions;

export const selectUserChatId = (state) => state.userChat.userChatId;
export const selectUserChatName = (state) => state.userChat.userChatName;


export default userChatSlice.reducer;
