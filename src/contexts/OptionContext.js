import { createContext } from 'react'

export const OptionContext = createContext()

export const OptionProvider = ({ children }) => {


    return (
        <OptionContext.Provider value={{}}>
            {children}
        </OptionContext.Provider>
    )
}