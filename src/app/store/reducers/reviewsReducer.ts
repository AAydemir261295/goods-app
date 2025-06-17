import { createSlice } from "@reduxjs/toolkit";
import { Review } from "../models/Reviews";
import { fetchReviews } from "../thunks";

interface InitialState {
    isPending: boolean;
    error: string | undefined;
    items: Review[];
}

const initialState: InitialState = {
    isPending: false,
    error: "",
    items: [],
};



const reviewsReducer = createSlice({
    name: "reviews",
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchReviews.pending, (state, action) => {
            console.log("pending");
            state.isPending = true;
        })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                console.log(action.payload);
                state.items = [...state.items, ...action.payload];
                state.isPending = false;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
});


const { actions, reducer } = reviewsReducer;

// export const { } = actions;

export default reducer;