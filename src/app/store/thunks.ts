import { createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveGoods } from "../backendApi/goodsApi";
import { retrieveReviews } from "../backendApi/ReviewsApi";

export const fetchGoods = createAsyncThunk("getGoods", async (payload: { page: number, size: number }) => {
    const data = await retrieveGoods(payload.page, payload.size);
    return data;
})

export const fetchReviews = createAsyncThunk("getReviews", async () => {
    const data = await retrieveReviews();
    return data;
})