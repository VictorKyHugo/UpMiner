import CarouselCard from "./CaroulselCard"
import icons from '../assets/icons'
import { useRef, useState, useEffect } from "react"

const Carousel = ({ title, price }) => {

    const carousel = useRef(null)
    const [handleScroll, setHandleScroll] = useState(0)


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

        if (carousel.current.offsetWidth < 700) {
            if (handleScroll === 1) {
                carousel.current.scrollLeft += carousel.current.offsetWidth * 1000
                setHandleScroll(cards.length)
            } else {
                carousel.current.scrollLeft -= carousel.current.offsetWidth

                setHandleScroll(prev => prev - 1)
            }
        } else {
            if (handleScroll <= 1) {
                carousel.current.scrollLeft += carousel.current.offsetWidth * 1000
                setHandleScroll(cards.length)
            } else {
                carousel.current.scrollLeft -= carousel.current.offsetWidth

                setHandleScroll(prev => prev - (cards.length / 2))
            }
        }



    }

    const handleRightClick = (e) => {

        e.preventDefault()

        if (carousel.current.offsetWidth < 700) {
            if (handleScroll === cards.length) {
                carousel.current.scrollLeft -= carousel.current.offsetWidth * 1000
                setHandleScroll(1)
            } else {
                carousel.current.scrollLeft += carousel.current.offsetWidth
                setHandleScroll(prev => prev + 1)
            }
        } else {
            if (handleScroll >= cards.length) {
                carousel.current.scrollLeft -= carousel.current.offsetWidth * 1000
                setHandleScroll(1)
                console.log(handleScroll)

            } else {
                carousel.current.scrollLeft += carousel.current.offsetWidth
                setHandleScroll(prev => prev + (cards.length / 2))
                console.log(handleScroll)
            }
        }



    }

    useEffect(() => {
        setHandleScroll(1)
        carousel.current.scrollLeft -= carousel.current.offsetWidth * 1000

    }, [])

    useEffect(() => {

        const interval = setInterval(() => {
            if (carousel.current.offsetWidth < 700) {
                if (handleScroll === cards.length) {
                    carousel.current.scrollLeft -= carousel.current.offsetWidth * 1000
                    setHandleScroll(1)
                } else {
                    carousel.current.scrollLeft += carousel.current.offsetWidth
                    setHandleScroll(prev => prev + 1)
                }
            } else {
                if (handleScroll >= cards.length) {
                    carousel.current.scrollLeft -= carousel.current.offsetWidth * 1000
                    setHandleScroll(1)
                } else {
                    carousel.current.scrollLeft += carousel.current.offsetWidth
                    setHandleScroll(prev => prev + (cards.length / 2))

                }
            }
        }, 5000)

        return function cleanup() {
            clearInterval(interval)
        }

    }, [handleScroll, cards.length])

    return (
        <div className='carousel'>
            <div className='carousel__slider'>

                <div ref={carousel} className='carousel__slider__cards'>
                    {cards.map(item => {
                        return (
                            <CarouselCard title={item.title} price={item.price} num={item.id} key={item.id} />
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