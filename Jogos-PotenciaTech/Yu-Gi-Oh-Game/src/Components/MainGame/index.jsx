import './maingame.css'
import {useContext} from 'react'
import { Context } from '../../Context'

export const MainGame = () => {
    return(
        <main id="MainGame">
            {/* Componente ContainerLeft */}
            <ContainerLeft/>

            {/* Componente ContainerRight */}
            <ContainerRight/>
        </main>
    )
}

// Componente ContainerLeft 
const ContainerLeft = () => {
    // States globais - win e lose
    const {contWin, contLoser} = useContext(Context)
    return(
        <div id="ContainerLeft">

            {/* Painel Profile */}
            <div id='painelProfile'>
                <h1>Win: <span>{contWin}</span></h1>
                <h1>Loser: <span>{contLoser}</span></h1>
            </div>

            {/* Card */}
            <div id='cardVisualization'>

            </div>

            {/* Attributes card */}
            <div id='attributesCard'></div>
        </div>
    )
}

// Componente ContainerRight 
const ContainerRight = () => {
    return(
        <div id="ContainerRight">
          oi  
        </div>
    )
}