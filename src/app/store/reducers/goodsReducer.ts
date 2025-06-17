import { createSlice } from "@reduxjs/toolkit";
import { Good, GoodsList } from "../models/Goods";
import { fetchGoods } from "../thunks";

interface InitialState {
    isPending: boolean;
    error: string | undefined;
    items: Good[]
}

const initialState: InitialState = {
    isPending: false,
    error: "",
    items: []
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
                state.items = [...state.items, ...action.payload.items];
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