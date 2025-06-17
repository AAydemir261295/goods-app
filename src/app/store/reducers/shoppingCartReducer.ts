import { createSlice } from "@reduxjs/toolkit";
import { Good } from "../models/Goods";

interface InitialState {
    goods: Good[],
    telephone: string
}

const initialState: InitialState = {
    goods: [],
    telephone: ""
}

const shoppingCartReducer = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        updateCart(state, action) {
            return state = { ...state, goods: { ...action.payload.goods }, telephone: action.payload.telephone };
        },
        updateOrder(state, action: { payload: Good }) {
            return state = { ...state, goods: state.goods.map((v: Good) => v.id == action.payload.id ? action.payload : v) }
        },
        updatePhoneNumber(state, action: { payload: string }) {
            return state = { ...state, telephone: action.payload }
        }
    }
});


const { actions, reducer } = shoppingCartReducer;

export const { updateCart, updateOrder, updatePhoneNumber } = actions;

export default reducer;