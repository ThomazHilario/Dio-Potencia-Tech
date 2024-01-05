import './header.css'
export const Header = () => {
    return(
        <header>
            <div className='infoGame'>
                <span className='title'>YOUR POINTS:</span>
                <span id='points'>0</span>
            </div>

            <div className='infoGame'>
                <span className='title'>TIME LEFT:</span>
                <span id='time'>00</span>
            </div>

            <div className='infoGame'>
                <img src="" alt="imagem de vidas" />
                <span>X0</span>
            </div>
        </header>
    )
}