import React, { useState, useEffect } from 'react'
import SlideImages from "../../assets/slides/slide-images"

import "./Slider.css"

function Slider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setCurrentSlideIndex(prev => {
            if (prev === SlideImages.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        }), 3000)

        return () => {
            // cleanup
            clearTimeout(timer)
        };
    }, [currentSlideIndex]);

    return (
        <div className='slider'>
            <div className="slider-container">
                {SlideImages.map((slide, index) => (
                    <div className="slide" style={{
                        marginLeft: index === 0 ? `${currentSlideIndex * -100}%` : ""
                    }}>
                        <img src={slide.imageUrl} alt="" className="slide-image" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider