import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./reducers/reviewsReducer";
import goodsReducer from "./reducers/goodsReducer";


export const store = configureStore({
    reducer: {
        reviews: reviewsReducer,
        goods: goodsReducer
    }
})

