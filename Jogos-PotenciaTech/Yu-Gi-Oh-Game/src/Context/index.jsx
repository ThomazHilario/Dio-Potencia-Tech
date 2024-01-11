import {createContext, useState} from 'react'

// Criando um contexto
export const Context = createContext(null)

// Componente do ContextGame
export const ContextGame = ({children}) => {

    // State - contWin
    const [contWin, setContWin] = useState(0)
    
    // State - contLoser
    const [contLoser, setContLoser] = useState(0)

    return(
        <Context.Provider value={{contWin, setContWin, contLoser, setContLoser}}>
            {children}
        </Context.Provider>
    )
}
