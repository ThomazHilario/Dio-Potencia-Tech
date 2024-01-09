import './maingame.css'
import { GameInterface } from '../GameInterface'

export const MainGame = () => {
    return(
        <main>
            {/* button Start Game */}
            <button className='buttonCss'>START GAME</button>

            {/* Interface do jogo da velha */}
            <GameInterface/>
        </main>
    )
}