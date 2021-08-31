import Card from "./Card";
import icons from '../assets/icons'

import { OptionContext } from '../contexts/OptionContext'
import { useContext } from "react";


const CardList = () => {

    const { hasFilter, isSelected } = useContext(OptionContext)

    const components = {
        filter: hasFilter,
        cards: [
            {
                id: 0, icon: icons.briefcase, title: 'Profissional', price: '30,00', release: '2020/02/30',
            },

            {
                id: 1, icon: icons.landmark, title: 'Reguladores', price: '29,00', release: '2020/02/24',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },

            {
                id: 2, icon: icons.tree, title: 'Sócio Ambiental', price: '29,00', release: '2020/04/15',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 3, icon: icons.gavel, title: 'Jurídico', price: '28,00', release: '2020/01/01',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 4, icon: icons.ban, title: 'Listas Restritivas', price: '28,00', release: '2020/05/03',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 5, icon: icons.americas, title: 'Mídia / Internet', price: '29,00', release: '2020/01/07',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 6, icon: icons.gem, title: 'Bens e Imóveis', price: '27,00', release: '2020/07/24',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 7, icon: icons.male, title: 'Cadastro', price: '29,00', release: '2020/02/22',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 8, icon: icons.piggy, title: 'Financeiro', price: '30,00', release: '2020/02/08',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 9, icon: icons.piggy, title: 'Financeiro', price: '30,00', release: '2020/09/20',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 10, icon: icons.tree, title: 'Sócio Ambiental', price: '29,00', release: '2020/02/24',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 11, icon: icons.gavel, title: 'Jurídico', price: '28,00', release: '2020/02/22',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
        ]
    }

    const filterArray = (value) => {

        if (value.title === components.filter) {
            return value
        } else if (components.filter === null || components.filter === 'Todos') {
            return value
        }
    }

    const filteredArray = components.cards.filter(filterArray)

    return (
        <div className='card-list'>

            {
                filteredArray.sort((a, b) => {
                    if (isSelected === 'release') {
                        const dataA = new Date(a.release)
                        const dataB = new Date(b.release)

                        return (dataA - dataB)
                    } else if (isSelected === 'price') {
                        const priceA = a.price.split(',')
                        const newPriceA = priceA.join('')

                        const priceB = b.price.split(',')
                        const newPriceB = priceB.join('')

                        return (newPriceA - newPriceB)
                    }

                    return ''

                }).map((item => {


                    return (
                        <Card
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            price={item.price}
                            text={item.text}
                        />
                    )
                }))
            }

        </div>
    )

}


export default CardList