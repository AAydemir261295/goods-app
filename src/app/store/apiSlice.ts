import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GoodsList } from './models/Goods'
import { Reviews } from './models/Reviews';

const apiUrl = "http://o-complex.com:1337";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    endpoints: builder => ({
        getReviews: builder.query<Reviews[], void>({
            query: () => '/reviews',
        }),
        getGoods: builder.query<GoodsList, { page: number, size: number }>({
            query: (payload) => `/products?page=${payload.page}&page_size=${payload.size}`,
        }),
    }),
})

export const { useGetReviewsQuery, useGetGoodsQuery } = apiSlice


