import { createSlice } from "@reduxjs/toolkit";

export interface ReviewsState {

}

const reviewsReducer = createSlice({
    name: "reviews",
    initialState: {
        test: "value"
    },
    reducers: {
        retrieveReviews(state, action) {
            return state = { ...state, ...action.payload };
        },
    }

});


const { actions, reducer } = reviewsReducer;

export const { retrieveReviews } = actions;

export default reducer;
