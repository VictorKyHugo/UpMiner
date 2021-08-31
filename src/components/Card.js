const Card = ({ icon, title, price, text }) => (
    <div className='card'>
        <div className='card__frame'>
            <span className='card__frame__icon'>{icon}</span>
        </div>
        <h3 className='card__title'>{title}</h3>

        {text && <p className='card__text'> {text} </p>}

        <div className='card__info'>
            <span className='card__price'> R$ {price}</span>
            <span className='card__learn-more'>Saiba mais</span>
        </div>
    </div>
)

export default Card