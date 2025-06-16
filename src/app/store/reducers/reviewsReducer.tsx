import { createSlice } from "@reduxjs/toolkit";

export interface ReviewsState {

}

const reviewsReducer = createSlice({
    name: "reviews",
    initialState: {

    },
    reducers: {
        retrieveData(state, action) {
            return state = { ...state, ...action.payload };
        },
    }

});


const { actions, reducer } = reviewsReducer;

export const { retrieveData } = actions;

export default reducer;
