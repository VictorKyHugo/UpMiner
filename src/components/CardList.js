import Card from "./Card";
import icons from '../assets/icons'

import { useState } from "react";


const CardList = () => {

    const [isRendered, setIsRendered] = useState({
        filter: null,
        cards: [
            { id: 0, icon: icons.briefcase, title: 'Profissional', price: '29,00' },
            {
                id: 1, icon: icons.landmark, title: 'Reguladores', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },

            {
                id: 2, icon: icons.tree, title: 'Sócio Ambiental', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 3, icon: icons.gavel, title: 'Jurídico', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 4, icon: icons.ban, title: 'Listas Restritivas', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 5, icon: icons.americas, title: 'Mídia / Internet', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 6, icon: icons.gem, title: 'Bens e Imóveis', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 7, icon: icons.male, title: 'Cadastro', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 8, icon: icons.piggy, title: 'Financeiro', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 9, icon: icons.piggy, title: 'Financeiro', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 10, icon: icons.tree, title: 'Sócio Ambiental', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
            {
                id: 11, icon: icons.gavel, title: 'Jurídico', price: '29,00',
                text: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte."
            },
        ]
    })



    return (


        <div className='card-list'>

            {isRendered.cards.map((item => {

                return (
                    <Card
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        price={item.price}
                        text={item.text}
                    />
                )
            }))}


        </div>
    )

}


export default CardList