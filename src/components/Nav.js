import icons from '../assets/icons'
import NavOption from './NavOption'
import { useState, useContext } from 'react'
import { OptionContext } from '../contexts/OptionContext'


const Nav = () => {

    const { hasFilter, setHasFilter } = useContext(OptionContext)

    const [isActive, setIsActive] = useState({
        filter: hasFilter,
        activeObject: 0,
        objects: [
            { id: 0, icon: icons.globe, title: 'Todos' },
            { id: 1, icon: icons.briefcase, title: 'Profissional' },
            { id: 2, icon: icons.landmark, title: 'Reguladores' },
            { id: 3, icon: icons.tree, title: 'Sócio Ambiental' },
            { id: 4, icon: icons.gavel, title: 'Jurídico' },
            { id: 5, icon: icons.ban, title: 'Listas Restritivas' },
            { id: 6, icon: icons.americas, title: 'Mídia / Internet' },
            { id: 7, icon: icons.gem, title: 'Bens e Imóveis' },
            { id: 8, icon: icons.male, title: 'Cadastro' },
            { id: 9, icon: icons.piggy, title: 'Financeiro' }
        ]
    })

    const toggleActive = (index) => {
        setIsActive(() => ({
            ...isActive,
            activeObject: isActive.objects[index].id,
            filter: isActive.objects[index].title
        }),
            setHasFilter(isActive.objects[index].title),
        )

    }

    return (
        <nav className='nav'>
            {isActive.objects.map((item, index) => {



                return (
                    <NavOption
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        toggleActive={() => (toggleActive(index, item.title))}
                        isActive={isActive.activeObject === index}
                    />
                )

            })}

        </nav>
    )
}



export default Nav