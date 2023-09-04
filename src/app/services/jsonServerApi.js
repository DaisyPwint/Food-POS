import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
    reducerPath: 'jsonServerApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    tagTypes:['Menu'],
    endpoints: (builder) => ({
        getMenu: builder.query({
            query: () => '/menu'
        }),
        getMenuById: builder.query({
            query: (id) => `menu/${id}`
        })
    })
})

export const {useGetMenuQuery,useGetMenuByIdQuery} = jsonServerApi;