import React from 'react'
import { createBrowserRouter } from 'react-router'
import App from '../App'
import Home from '../Pages/Home'
import ListenBooks from '../Pages/ListenBooks'
import PageToRead from '../Pages/PageToRead'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                loader: () => fetch('booksData.json'),
                Component: Home
            },
            {
                path: "listen-books",
                Component: ListenBooks,
            },
            {
                path: "page-to-read",
                Component: PageToRead,
            },
        ]
    },

])
