import { createSlice } from "@reduxjs/toolkit";

export interface GoodsState {

}

const initialState = {

}

const goodsReducer = createSlice({
    name: "goods",
    initialState: initialState,
    reducers: {
        retrieveData(state, action) {
            return state = { ...state, images: { ...action.payload }, uploadCount: 3 };
        },
       
    }
});


const { actions, reducer } = goodsReducer;

export const { retrieveData } = actions;

export default reducer;
