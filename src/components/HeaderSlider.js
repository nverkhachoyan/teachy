import React from 'react'
import SlideImages from "../assets/header-slides/slide-images"
import { useHeaderSliderContext } from "../contexts/useHeaderSlider"

import "./HeaderSlider.css"

function HeaderSlider() {
    const { slideImageIndex } = useHeaderSliderContext()

    return (
        <div className='header-slider'>
            <div className="header-slider-container">
                {SlideImages.map((slide, index) => (
                    <div className={index === slideImageIndex ? "header-slide header-slide-active" : "header-slide"} >
                        <img src={slide.imageUrl} />
                    </div>
                ))}
            </div>
            <div className="slider-shadow"></div>
        </div>
    )
}

export default HeaderSlider