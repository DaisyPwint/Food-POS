import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { menuApi } from "./services/api";
import menuReducer from "../slices/menuSlice";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer,
        [menuApi.reducerPath] : menuApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(menuApi.middleware)
})

setupListeners(store.dispatch);