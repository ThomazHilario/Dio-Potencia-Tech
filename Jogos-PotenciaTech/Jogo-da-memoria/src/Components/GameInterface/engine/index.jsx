// shuffle
function shuffle(array){

    // Estrutura que tera o total de array como valor, e a cada loop o valor e decrementado, e caso o i seja maior que 0, o valor do i e decrementado.
    for(let i = array.length - 1;i > 0; i--){

        // Escolhendo um emoji aleatorio
        const randomItem = Math.floor(Math.random() * array.length);

        // Trocando a posicao do emoji
        [array[i],array[randomItem]] = [array[randomItem],array[i]] 
    }

    // Retornando valor
    return array
}


// Startando game
export function gameStart(){

    // Array de emojiss
    const emojis = [
        '🐺',
        '🐺',
        '🐻',
        '🐻',
        '🐼',
        '🐼',
        '🐯',
        '🐯',
        '🐬',
        '🐬',
        '🐱',
        '🐱'
    ]

    // Novo array com os valores aleatorios
    let newArray = shuffle(emojis)

    // Pegando todos os paineis
    const paineis = document.querySelectorAll('.painel')

    // Percorrendo paineis
    paineis.forEach(painel => {

        // Escolhendo um emoji aleatorio do array
        const randomItemIndex = Math.floor(Math.random() * newArray.length)

        // Adicionando ao span o valor aleatorio
        painel.firstElementChild.textContent = newArray[randomItemIndex]

        // retirando o emoji do array
        newArray.splice(randomItemIndex,1)
    })

    // Alterando o display do buttonStartGame
    document.getElementById('buttonStartGame').style.display = 'none'

    // Alterando o display da gameInterface
    document.getElementById('gameInterface').style.display = 'grid'
}

// array de verificacao
const arrayVerification = []

export function clickPainel(painel){
    // Alterando o display do span
    painel.firstElementChild.style.display = 'block'

    // Pegando o emoji do span
    const emojiSelected = painel.firstElementChild.textContent

    

    // Jogando o valor para dentro do array
    arrayVerification.push(emojiSelected)
console.log(arrayVerification[0] === arrayVerification[1],arrayVerification)
    // Logica condicional
    if(arrayVerification.length == 2){

        // capturando paineis
        const paineis = document.querySelectorAll('.painel')

        if(arrayVerification[0] === arrayVerification[1]){

            // Percorrendo Paineis
            paineis.forEach(painel => {

                //Pegando o span dentro do painel
                const painelSpan = painel.firstElementChild

                // Caso o texto contido do painel seja o mesmo do array ele ficara block
                if(painelSpan.textContent.includes(arrayVerification[0])){

                    // Alterando o display do painelSpan para block 
                    painelSpan.style.display = 'block'

                    // Deixando o button desativado
                    painel.setAttribute('disabled',false)
                }
            })

            // Removendo os dois emojis do array
            arrayVerification.pop()
            arrayVerification.pop()

        }else{

            // Percorrendo paineis
            paineis.forEach(painel => {

                // Pegando o span dentro do painel
                const painelSpan = painel.firstElementChild

                // Caso o painelSpan tenha o mesmo texto do array da posicao 0 e 1 ambos receberao display none
                if(painelSpan.textContent.includes(arrayVerification[0]) || painelSpan.textContent.includes(arrayVerification[1])){
                    // Depois de meio segundo o display do span recebe none
                    setTimeout(() => painelSpan.style.display = 'none',500)
                }
            })

            // Removendo os dois emojis do array
            arrayVerification.pop()
            arrayVerification.pop()
        }
    }
}