import { createSlice } from "@reduxjs/toolkit";
import { Good } from "../models/Goods";

export interface ShoppingCartState {
    goods: Good[],
    telephone: string
}

const initialState: ShoppingCartState = JSON.parse(localStorage.getItem("cart")) == null ? {
    goods: [],
    telephone: '+7 (___) ___ __-__',
} :
    JSON.parse(localStorage.getItem("cart"));

const shoppingCartReducer = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        setCart(state, action) {
            return state = { ...state, goods: { ...action.payload.goods }, telephone: action.payload.telephone };
        },
        updateOrder(state, action: { payload: Good }) {
            var tmp = state.goods.find((v: Good) => v.id == action.payload.id);
            if (tmp == undefined) {
                return state = { ...state, goods: [...state.goods, action.payload] };
            } else {
                return state = { ...state, goods: state.goods.map((v: Good) => v.id == action.payload.id ? action.payload : v) }
            }
        },
        removeGood(state, action: { payload: number }) {
            return state = { ...state, goods: state.goods.filter((v) => v.id != action.payload) }
        },
        updatePhoneNumber(state, action: { payload: string }) {
            return state = { ...state, telephone: action.payload }
        },
        resetState(state) {
            return state = { goods: [], telephone: '+7 (___) ___ __-__' }
        }
    }
});


const { actions, reducer } = shoppingCartReducer;

export const { setCart, updateOrder, removeGood, updatePhoneNumber, resetState } = actions;

export default reducer;