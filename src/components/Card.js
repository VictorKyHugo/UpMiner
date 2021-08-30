const Card = () => (
    <div className='card'>
        <div className='card__icon'>icon</div>
        <h3 className='card__title'>title</h3>
        <p className='card__text'>O aplicativo Balanço Patrimonial realiza a consulta de todos
            os balanços que são publicados nos Diários Oficiais de empresas
            S.A., de capital aberto e limitadas (LTDA) de grande porte.
        </p>
        <div className='card__info'>
            <span className='card__price'> R$ 29,00</span>
            <span className='card__learn-more'>Saiba mais</span>
        </div>
    </div>
)

export default Card