import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menu: "#home"
};

export const selectMenuState = (state) => state.menu.menu

export const { reducer, actions } = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        SetMenu: (state, action) => {
            state.menu = action.payload
        },
    },
});