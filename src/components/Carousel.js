import CarouselCard from "./CaroulselCard"
import icons from '../assets/icons'


const Carousel = ({ title, price }) => {

    const cards = [
        { title, price, id: 0 },
        { title, price, id: 1 },
        { title, price, id: 2 },
        { title, price, id: 3 },
        { title, price, id: 4 },
    ]

    return (
        <div className='carousel'>

            <div className='carousel__cards'>
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
                <CarouselCard />
            </div>


        </div>
    )
}

export default Carousel