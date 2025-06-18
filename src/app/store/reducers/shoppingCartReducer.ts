import { createSlice } from "@reduxjs/toolkit";
import { Good } from "../models/Goods";
import Goods from "@/app/components/goods";

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
            var tmp = state.goods.find((v) => v.id == action.payload.id);
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
        }
    }
});


const { actions, reducer } = shoppingCartReducer;

export const { updateCart, updateOrder, removeGood, updatePhoneNumber } = actions;

export default reducer;