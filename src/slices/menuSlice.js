import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menu: []
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers:{}
})


export const {filterMenu} = menuSlice.actions;

export default menuSlice.reducer;