import { useState, useEffect, createContext, useContext } from 'react'
import SlideImages from "../assets/header-slides/slide-images"

const SliderContext = createContext()

const useHeaderSliderContext = () => useContext(SliderContext)

function HeaderSliderProvider({ children }) {
    const [slideImageIndex, setSlideImageIndex] = useState(0)


    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideImageIndex(prevIndex => {
                if (prevIndex === SlideImages.length - 1) {
                    return 0
                } else {
                    return prevIndex + 1
                }
            })
        }, 5000)
        return () => clearTimeout(timer)
    }, [slideImageIndex]);

    return (
        <SliderContext.Provider value={{ slideImageIndex }}>
            {children}
        </SliderContext.Provider>
    )
}

export { HeaderSliderProvider, useHeaderSliderContext }