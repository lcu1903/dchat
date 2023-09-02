import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '../reducer/channelSlice';
import userReducer from '../reducer/userSlice';
import userChatReducer from '../reducer/chatUserSlice';

export const store = configureStore({
    reducer: {
        channel: channelReducer,
        users: userReducer,
        userChat: userChatReducer,
    },
});
