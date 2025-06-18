import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: shoppingCartReducer,
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
