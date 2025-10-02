import React from 'react'
import Banner from '../components/banner/Banner'
import Books from '../components/Books/Books'
import { useLoaderData } from 'react-router'

const Home = () => {
    const data = useLoaderData()
    return (
        <>
            <Banner />
            <Books data={data} />
        </>
    )
}

export default Home