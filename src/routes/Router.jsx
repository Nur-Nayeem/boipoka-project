import React from 'react'
import { createBrowserRouter } from 'react-router'
import App from '../App'
import Home from '../Pages/Home'
import ListenBooks from '../Pages/ListenBooks'
import PageToRead from '../Pages/PageToRead'
import BookDetails from '../components/bookDetails/BookDetails'

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
            {
                path: 'book-details/:id',
                loader: () => fetch('booksData.json'),
                Component: BookDetails
            }
        ]
    },

])
