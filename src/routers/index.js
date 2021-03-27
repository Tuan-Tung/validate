import HomePage from '../pages/Homepage'

import React from 'react'
import DetailPAge from '../pages/DetailPage'
import Cart from '../pages/Cart'
import Login from '../pages/login'

const router = [
    {
        path: '/',
        exact: true,
        main: ()=> <HomePage />
    },
    {
        path: '/products',
        exact: true,
        main: ()=> <Cart />
    },
    {
        path: '/products/:id/detail',
        exact: false,
        main: (match)=> <DetailPAge match={match}/>
    },
    {
        path: '/login',
        exact: false,
        main: ()=> <Login />
    }
]

export default router
