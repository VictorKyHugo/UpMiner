import CarouselCard from "./CaroulselCard"
import icons from '../assets/icons'

import { useRef, useState, useEffect } from "react"


const Carousel = ({ title, price }) => {

    const carousel = useRef(null)
    const [handleScroll, setHandleScroll] = useState(0)

    useEffect(() => {
        setHandleScroll(0)
        carousel.current.scrollLeft -= carousel.current.offsetWidth * 5

    }, [])

    const cards = [
        { title, price, id: 0 },
        { title, price, id: 1 },
        { title, price, id: 2 },
        { title, price, id: 3 },
        { title, price, id: 4 },
        { title, price, id: 5 },
    ]

    const handleLeftClick = (e) => {

        e.preventDefault()

        if (handleScroll <= 1) {
            carousel.current.scrollLeft += carousel.current.offsetWidth * 5
            setHandleScroll(4)
        } else {
            carousel.current.scrollLeft -= carousel.current.offsetWidth

            setHandleScroll(prev => prev - 2)
        }

    }

    const handleRightClick = (e) => {

        e.preventDefault()

        if (handleScroll >= 3) {
            carousel.current.scrollLeft -= carousel.current.offsetWidth * 5
            setHandleScroll(0)
        } else {
            carousel.current.scrollLeft += carousel.current.offsetWidth
            setHandleScroll(prev => prev + 2)
        }

    }

    return (
        <div className='carousel'>
            <div className='carousel__slider'>

                <div ref={carousel} className='carousel__slider__cards'>
                    {cards.map(item => {
                        return (
                            <CarouselCard title={item.title} price={item.price} key={item.id} />
                        )
                    })}
                </div>

                <div className='carousel__slider__arrows'>
                    <button onClick={handleLeftClick} className='carousel__slider__arrows__left'>{icons.arrow}</button>
                    <button onClick={handleRightClick} className='carousel__slider__arrows__right'>{icons.arrow}</button>
                </div>
            </div>
        </div >

    )
}

export default Carousel