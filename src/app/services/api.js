import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const menuApi = createApi({
    reducerPath: 'menuApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    tagTypes:['Menu'],
    endpoints: (builder) => ({
        getMenu: builder.query({
            query: () => 'menu'
        }),
        getMenuById: builder.query({
            query: (id) => `menu/${id}`
        })
    })
})

export const {useGetMenuQuery,useGetMenuByIdQuery} = menuApi;