import { createSlice } from "@reduxjs/toolkit";
import { GoodsList } from "../models/Goods";
import { fetchGoods } from "../thunks";

interface InitialState {
    isPending: boolean;
    error: string | undefined;
    goodsList: GoodsList[];
}

const initialState: InitialState = {
    isPending: false,
    error: "",
    goodsList: [],
};



const goodsReducer = createSlice({
    name: "goods",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchGoods.pending, (state, action) => {
            state.isPending = true;
        })
            .addCase(fetchGoods.fulfilled, (state, action) => {
                state.goodsList = [...state.goodsList, action.payload];
                state.isPending = false;
            })
            .addCase(fetchGoods.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
});


const { actions, reducer } = goodsReducer;

// export const { } = actions;

export default reducer;