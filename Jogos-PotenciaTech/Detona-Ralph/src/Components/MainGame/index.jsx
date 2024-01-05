import './maingame.css'
import {useContext} from 'react'
import { Context } from '../../Context'

const gameSettings = {
    gameSpeed:600,
}

export const MainGame = () => {

    // Contextos globais
    const {points, setPoints, lives,setLives} = useContext(Context)

    // getPoints
    function getPoints(){
        setPoints(points + 1)
    }

    //loseLives
    function loseLives(){
        setLives(lives - 1)
    }


    // Click no painel
    function click(tag){
        if(tag.className.includes('ralph')){
            getPoints()
        } else{
            loseLives()
        }
        
    }

    // StartGame - iniciando o jogo
    function startPlaying(){
        document.getElementById('modalStart').style.display = 'none'

        document.getElementById('gameInterface').style.display = 'grid'
        
        startGame()
    }

    return(
        <main>

            {/* ModalStartPlay */}
            <div id='modalStart'>
                {/* titulo do modal */}
                <h1>Bem-vindo ao jogo</h1>

                {/* paragrafo de regra */}
                <h2>Regras:</h2>

                {/* Regras */}
                <ul>
                    <li>Ao clicar em start o jogo irá começar.</li>
                    <li>Seu objetivo é clicar no quadro onde o Ralph está.</li>
                    <li>Caso clique no quadro onde o Ralph não está, perde uma vida de três.</li>
                    <li>Lembrando que a cada 60 segundos passados temos o <strong>timeout</strong>, e a cada retorno do timeOut o tempo que o Ralph aparece é dividido em 1.25!</li>
                    <li>Faça a maior pontuação que puder! 😉</li>
                </ul>

                {/* Startar o jogo */}
                <button className='buttonCss' id='startPlay' onClick={startPlaying}>Start</button>
            </div>

            {/* ModalGamerOverPlay */}
            <ModalGamerOverPlay points={points} setPoints={setPoints} setLives={setLives}/>

            {/* TimeOutModal */}
            <TimeOut points={points}/>

            {/* gameInterface */}
            <div id="gameInterface">
                <div className="painel" id='0' onClick={(e) => click(e.target)}></div>
                <div className="painel" id='1' onClick={(e) => click(e.target)}></div>
                <div className="painel" id='2' onClick={(e) => click(e.target)}></div>
                <div className="painel" id='3' onClick={(e) => click(e.target)}></div>
                <div className="painel" id='4' onClick={(e) => click(e.target)}></div>
                <div className="painel" id='5' onClick={(e) => click(e.target)}></div>
                <div className="painel" id='6' onClick={(e) => click(e.target)}></div>
                <div className="painel" id='7' onClick={(e) => click(e.target)}></div>
                <div className="painel" id='8' onClick={(e) => click(e.target)}></div>
            </div>
        </main>
    )
}

// Componente de modalGamerOver
function ModalGamerOverPlay({points, setLives, setPoints}){

    function startPlayAgain(){
        // Resetando vidas e pontos
        setPoints(0)
        setLives(3)

        // Alterando o display dos modalGamerOverPLay
        document.getElementById('modalGamerOverPlay').style.display = 'none'

        // Alterando o display da gameInterface
        document.getElementById('gameInterface').style.display = 'grid'

        // Startando o jogo novamente
        startGame()
    }

    return(
        <div id='modalGamerOverPlay'>
            {/* Titulo */}
            <h2>Game Over</h2>

            {/* Points Player */}
            <h3>Points:{points}</h3>

            {/* startGame */}
            <button className='buttonCss' onClick={startPlayAgain}>Play Again</button>
        </div>
    )
}



// Componente TimeOut
function TimeOut({ points }){

    // Retornando pos timeOut
    function playReturn(){
        gameSettings.gameSpeed / 1.25

        // Alterando o display dos timeOutModal
        document.getElementById('timeOutModal').style.display = 'none'

        // Alterando o display dos gameInterface
        document.getElementById('gameInterface').style.display = 'grid'

        // Startando game
        startGame()
    }

    return(
        <div id='timeOutModal'>
            {/* Titulo */}
            <h2>TimeOut</h2>

            {/* Points */}
            <h3>points:{points}</h3>

            <button className='buttonCss' onClick={playReturn}>Return Play in 2x Speed</button>
        </div>
    )
}




// Função que será executada durante um intervalo de tempo
function initLoad(){

    // capturando paineis
    const paineis = document.querySelectorAll('.painel')

    // Limpando o ralph de cada painel
    paineis.forEach(painel => {
        painel.classList.remove('ralph')
    })

    // Escolhendo um painel para colocar o ralph
    paineis[Math.floor(Math.random() * 9)].classList.add('ralph')

}

// StartGame
function startGame(){
    // Executando o detonaalph
    const detonaRalph = setInterval(initLoad, gameSettings.gameSpeed)
    
    // Executando o timerSeconds
    const timerSeconds = setInterval(() => {
        document.getElementById('time').textContent = parseFloat(document.getElementById('time').textContent) - 1
    },1000)

    // Verificando o detonaRalph eo timerSeconds
    setInterval(() => {
    
        if(document.getElementById('time').textContent === '0'){

            // limpando os intervalos de tempo do timer e do detona ralph
            clearInterval(detonaRalph)
            clearInterval(timerSeconds)

            // Alterando display do modal e da gameInterface
            document.getElementById('timeOutModal').style.display = 'flex'
            document.getElementById('gameInterface').style.display = 'none'

            // Alterando o valor do tempo para 60 segundos
            document.getElementById('time').textContent = '60'

        } else if(document.getElementById('lives').textContent === 'X0'){

            // limpando os intervalos de tempo do timer e do detona ralph
            clearInterval(detonaRalph)
            clearInterval(timerSeconds)

            // Alterando display do modal e da gameInterface
            document.getElementById('modalGamerOverPlay').style.display = 'flex'
            document.getElementById('gameInterface').style.display = 'none'

            // Alterando o valor do tempo para 60 segundos
            document.getElementById('time').textContent = '60'
        }
    },10)
}