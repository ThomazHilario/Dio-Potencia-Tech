import './maingame.css'
import {useContext, useState, useEffect} from 'react'
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

    useEffect(() => {
        // loadCards
        async function loadCards(){
            // Fazendo a requisicao
            const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')

            // Transformando o valor da requisicao para ser manipulavel
            const data = await response.json()

            // Filtrando o resultado para vim somente monstros
            const cardsMonster = data.data.filter(element => element.type !== 'Spell Card')

            // setando na state cards
            setCards([...cardsMonster])

        }

        // Executando loadCards
        loadCards()

    },[])

    // Cartas do jogo
    const [cards, setCards] = useState([])

    // state - myCards
    const [myCards, setMyCards] = useState([])

    // state - botCards
    const [botCards, setBotCards] = useState([])

    // Escolehndo cinco cartas random para o bot e para o player
    function randomCards(array){

        // Esvaziando array
        if(array.length === 5){
            for(let i = 0; i < 5; i++){
                array.splice(i)
            }
        }

        for(let i = 0; i < 5; i++){
            array.push(cards[Math.floor(Math.random() * cards.length)])
        }

        
    }

    function getCards(){

        // Chamando o randomCards para escolher as cartas do bot e setando na state
        randomCards(botCards)
        setBotCards([...botCards])

        // Chamando o randomCards para escolher as cartas do player e setando na state
        randomCards(myCards)
        setMyCards([...myCards])

    }

    function startGame(){
        // Chamando o getCards
        getCards()

        // Alterando o display do button para none
        document.getElementById('btn-Start-Game').style.display = 'none'

        // Alterando o display do ContainerLeft
        document.getElementById('ContainerLeft').style.display = 'flex'

        // Alterando a width do ContainerRight
        document.getElementById('ContainerRight').style.width = `calc(100% - 400px})`
    }
    
    return(
        <div id="ContainerRight">
            {/* button start Game */}
          <button id='btn-Start-Game' onClick={startGame}>Game Start</button>

          
        </div>
    )
}