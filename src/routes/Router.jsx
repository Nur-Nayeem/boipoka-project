import React from 'react'
import { createBrowserRouter } from 'react-router'
import App from '../App'
import Home from '../Pages/Home'
import PageToRead from '../Pages/PageToRead'
import BookDetails from '../components/bookDetails/BookDetails'
import ListedBooks from '../Pages/ListedBooks'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "listed-books",
                loader: () => fetch('booksData.json'),
                Component: ListedBooks,
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
