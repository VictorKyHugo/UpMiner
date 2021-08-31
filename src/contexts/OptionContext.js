import { createContext, useState } from 'react'

export const OptionContext = createContext()

export const OptionProvider = ({ children }) => {

    const [hasFilter, setHasFilter] = useState(null)
    const [isSelected, setIsSelected] = useState('release')


    return (
        <OptionContext.Provider value={{ hasFilter, setHasFilter, isSelected, setIsSelected }}>
            {children}
        </OptionContext.Provider>
    )
}