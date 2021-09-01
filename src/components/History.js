import { useLocation, Link } from 'react-router-dom'
import icons from '../assets/icons'
import Carousel from './Carousel'

const History = () => {

    const location = useLocation()
    const { title, price, text } = location.state



    return (
        <div className='history'>
            <div className='history__title'>
                <Link to='/'>
                    <span className='history__title__go-back'>{icons.arrowBack}</span>
                </Link>
                <h1 className='history__title__text'>Histórico Empresarial</h1>
            </div>

            <Carousel title={title} price={price} />

            <div className='history__text'>
                <p className='history__text__first'>O aplicativo Histórico Empresarial permite ao usuário ter acesso
                    a todos os fatos e acontecimentos relevantes de uma empresa desde
                    o seu ano de fundação. Tenha acesso aos principais eventos corporativos
                    de uma empresa, como: marcos jurídicos, mudança no quadro societário, aumento
                    de capital, reportagens e muito mais.
                </p>

                <p className='history__text__second'>Após realizar a consulta, o histórico é salvo automaticamente, tornando
                    as informações acessíveis ao usuário. A linha do tempo pode também ser exportada
                    no formato PDF
                </p>
            </div>
            <div className='history__footer'>
                <div className='history__footer__price'>
                    <span className='history__footer__price__currency-symbol'>R$</span>
                    <span className='history__footer__price__value'>40,00</span>
                </div>

                <button className='history__footer__button'>Habilitar</button>
            </div>


        </div>
    )
}

export default History