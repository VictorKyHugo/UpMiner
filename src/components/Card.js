import { Link } from 'react-router-dom'

const Card = ({ icon, title, price, text }) => {

    return (
        <div className='card'>
            <div className={text ? 'card__frame' : 'card__frame card__frame--no-text'}>
                <span className='card__frame__icon'>{icon}</span>
            </div>

            <h3 className='card__title'>{title}</h3>

            {text && <p className='card__text'> {text} </p>}

            <div className='card__info'>
                <span className='card__price'> R$ {price}</span>
                <Link to={{
                    pathname: '/details',
                    state: {
                        title,
                        price,
                        text
                    }
                }}>
                    <button className='card__learn-more'>Saiba mais</button>
                </Link>

            </div>
        </div>
    )

}



export default Card