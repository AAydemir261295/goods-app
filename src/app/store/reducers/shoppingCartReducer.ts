import { createSlice } from "@reduxjs/toolkit";
import { Good } from "../models/Goods";

interface initialState {
    goods: Good[],
    telephone: string
}

const initialState = {
    goods: [],
    telephone: ""
}

const shoppingCartReducer = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        updateCart(state, action) {
            return state = { ...state, goods: { ...action.payload.goods }, telephone: action.payload.telephone };
        }
    }
});


const { actions, reducer } = shoppingCartReducer;

export const { updateCart } = actions;

export default reducer;