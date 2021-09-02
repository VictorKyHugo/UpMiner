const CarouselCard = ({ title, price, num }) => (

    <div className='carousel-card'>
        <span className='carousel-card__id'>{num + 1}</span>
        <p className='carousel-card__text'>Você clicou em {title}</p>
        <span className='carousel-card__price'>R$ {price}</span>
    </div>

)

export default CarouselCard