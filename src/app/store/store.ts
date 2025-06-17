import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import shoppingCartReducer from "./shoppingCartReducer";

export const makeStore = () => {
    return configureStore({
        reducer: {
            shoppingCart: shoppingCartReducer,
            [apiSlice.reducerPath]: apiSlice.reducer,
        },
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(apiSlice.middleware)

    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
