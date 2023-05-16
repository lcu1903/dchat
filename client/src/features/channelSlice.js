import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    channelId: null,
    channelName: null,
    serverId: null,
    serverName: null,
};

export const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
        setServerInfo: (state, action) => {
            state.serverId = action.payload.serverId;
            state.serverName = action.payload.serverName;
        },
        setChannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        },
    },
});

export const { setChannelInfo, setServerInfo } = channelSlice.actions;

export const selectChannelId = (state) => state.channel.channelId;
export const selectChannelName = (state) => state.channel.channelName;

export const selectServerId = (state) => state.channel.serverId;
export const selectServerName = (state) => state.channel.serverName;

export default channelSlice.reducer;
