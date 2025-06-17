import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import goodsReducer from "./reducers/goodsReducer";
import reviewsReducer from "./reducers/reviewsReducer";

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: shoppingCartReducer,
            goods: goodsReducer,
            reviews: reviewsReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
