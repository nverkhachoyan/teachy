import React from 'react'
import Header from "../components/Header"
import Features from "../components/Features"
import Footer from "../components/Footer"
import { HeaderSliderProvider } from "../contexts/useHeaderSlider"


function Home() {
    return (
        <>
            <HeaderSliderProvider>
                <Header />
            </HeaderSliderProvider>

            <Features />
            <Footer />
        </>
    )
}

export default Home