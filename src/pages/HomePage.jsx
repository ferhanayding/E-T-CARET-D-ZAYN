import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footter from '../components/Footter'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from "../components/Slider"

const HomePage = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footter/>
            </div>
    )
}

export default HomePage

