import './maingame.css'

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
    return(
        <div id="ContainerLeft">
            oi
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