import logo from '../assets/logo.png'

const Header = ({ theme }) => (
    <header className={theme === 'light' ? 'header header--light' : 'header'}>
        <div className='header__brand'>
            <img className='header__brand__logo' alt='UpMiner' src={logo} />
            <div className='header__brand__vertical-bar'></div>
            <div className='header__brand__title'>Histórico Empresarial</div>
        </div>
        <div className='header__text'>
            O aplicativo Histórico Empresarial permite
            ao usuário ter acesso a todos os fatos e acontecimentos
            relevantes de uma empresa desde o seu ano de fundação.
        </div>
        <div className='header__info'>
            <div className='header__info__price'>
                <span className='header__info__price__currency-symbol'>R$</span>
                <span className='header__info__price__value'> 40,00 </span>
            </div>
            <button className='header__info__learn-more'>Saiba Mais</button>
        </div>
    </header>
)

export default Header