import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./reducers/reviewsReducer";
import goodsReducer from "./reducers/goodsReducer";


// export const store = configureStore({
//     reducer: {
//         reviews: reviewsReducer,
//         goods: goodsReducer
//     }
// })

export const makeStore = () => {
    return configureStore({
        reducer: {
            reviews: reviewsReducer,
            goods: goodsReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

