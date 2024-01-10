import './piano.css'
import { useState } from 'react'
import a from '../../SongsPiano/a.wav'
import w from '../../SongsPiano/w.wav'
import s from '../../SongsPiano/s.wav'
import ez from '../../SongsPiano/ez.wav'
import d from '../../SongsPiano/d.wav'
import r  from '../../SongsPiano/r.wav'
import f from '../../SongsPiano/f.wav'
import t from '../../SongsPiano/t.wav'
import g from '../../SongsPiano/g.wav'
import y from '../../SongsPiano/y.wav'
import h from '../../SongsPiano/h.wav'
import u from '../../SongsPiano/u.wav'
import j from '../../SongsPiano/j.wav'
import i from '../../SongsPiano/i.wav'
import k from '../../SongsPiano/k.wav'
import o from '../../SongsPiano/o.wav'
import l from '../../SongsPiano/l.wav'



export const Piano = () => {

    // State - hidden
    const [hidden, setHidden] = useState(true)

    // Verificando se o hidden esta true 
    function hiddenSpan(){
        
        // Se estiver true, o span recebe display block
        if(hidden === true){
            document.querySelectorAll('.teclas').forEach(teclas => {
                teclas.firstElementChild.style.display = 'block'
            })

            // Alterando o valor da satte para false
            setHidden(false)

        } else{

            /* se estiver false o span recebe um display none */
            document.querySelectorAll('.teclas').forEach(teclas => {
                teclas.firstElementChild.style.display = 'none'
            })

            // Alterando o valor da satte para true
            setHidden(true)

        }
    }   

    return(
        <div id="pianoContent">
            {/* Header Piano */}
            <div id='headerPiano'>
                <h1>Virtual Piano</h1>

                <form>
                    {/* Input Range volume */}
                    <div>
                        <label>Volume</label>
                        <input type='range' id="mixer" min={0} max={10} defaultValue={5}/>
                    </div>

                    {/* Input Checkbox teclas */}
                    <div>
                        <label>Teclas</label>
                        <input type='checkbox' onChange={hiddenSpan}/>
                    </div>
                </form>
            </div>

            {/* Componente das Teclas do piano */}
            <TeclasPiano hidden={hidden}/>

        </div>
    )
}


const TeclasPiano = ({hidden}) => {

    // clickSound - ao clicar na div.
    function clickSound(element){
        if(hidden){
            if(element.firstElementChild.textContent === 'a'){
                songPlay(a)
            } else if(element.firstElementChild.textContent === 'w'){
                songPlay(w)
            } else if(element.firstElementChild.textContent === 's'){
                songPlay(s)
            } else if(element.firstElementChild.textContent === 'e'){
                songPlay(ez)
            } else if(element.firstElementChild.textContent === 'd'){
                songPlay(d)
            }else if(element.firstElementChild.textContent === 'r'){
                songPlay(r)
            }else if(element.firstElementChild.textContent === 'f'){
                songPlay(f)
            }else if(element.firstElementChild.textContent === 't'){
                songPlay(t)
            }else if(element.firstElementChild.textContent === 'g'){
                songPlay(g)
            }else if(element.firstElementChild.textContent === 'y') {
                songPlay(y)
            } else if(element.firstElementChild.textContent === 'h') {
                songPlay(h)
            } else if(element.firstElementChild.textContent === 'u'){
                songPlay(u)
            } else if(element.firstElementChild.textContent === 'j'){
                songPlay(j)
            } else if(element.firstElementChild.textContent === 'i'){
                songPlay(i)
            } else if(element.firstElementChild.textContent === 'k'){
                songPlay(k)
            } else if(element.firstElementChild.textContent === 'o'){
                songPlay(o)
            } else if(element.firstElementChild.textContent === 'l'){
                songPlay(l)
            }
        }
    }

    return(
        <div id='containerTeclasPiano'>
            <div className="teclas white" onClick={(e) => clickSound(e.target)} ><button disabled>a</button></div>
            <div className="teclas black" onClick={(e) => clickSound(e.target)} ><button disabled>w</button></div>
            <div className="teclas white" onClick={(e) => clickSound(e.target)} ><button disabled>s</button></div>
            <div className="teclas black" onClick={(e) => clickSound(e.target)} ><button disabled>e</button></div>
            <div className="teclas white" onClick={(e) => clickSound(e.target)} ><button disabled>d</button></div>
            <div className="teclas black" onClick={(e) => clickSound(e.target)} ><button disabled>r</button></div>
            <div className="teclas white" onClick={(e) => clickSound(e.target)} ><button disabled>f</button></div>
            <div className="teclas black" onClick={(e) => clickSound(e.target)} ><button disabled>t</button></div>
            <div className="teclas white" onClick={(e) => clickSound(e.target)} ><button disabled>g</button></div>
            <div className="teclas black" onClick={(e) => clickSound(e.target)} ><button disabled>y</button></div>
            <div className="teclas white" onClick={(e) => clickSound(e.target)} ><button disabled>h</button></div>
            <div className="teclas black" onClick={(e) => clickSound(e.target)} ><button disabled>u</button></div>
            <div className="teclas white" onClick={(e) => clickSound(e.target)} ><button disabled>j</button></div>
            <div className="teclas black" onClick={(e) => clickSound(e.target)} ><button disabled>i</button></div>
            <div className="teclas white" onClick={(e) => clickSound(e.target)} ><button disabled>k</button></div>
            <div className="teclas black" onClick={(e) => clickSound(e.target)} ><button disabled>o</button></div>
            <div className="teclas white" onClick={(e) => clickSound(e.target)} ><button disabled>l</button></div>
        </div>
    )
}

// songPlay - Audios flexíveis
function songPlay(song){
    // Instanciando audio
    const audio = new Audio(song)

    // Executando audio
    audio.play()

    // Volume do audio com base o valor do range
    audio.volume = parseInt(document.getElementById('mixer').value) / 10

}

// Evendo na janela do navegador
window.addEventListener('keydown',(e) => {
    if(e.key === 'a'){
        songPlay(a)
    } else if(e.key === 'w'){
        songPlay(w)
    } else if(e.key === 's'){
        songPlay(s)
    } else if(e.key === 'e'){
        songPlay(ez)
    } else if(e.key === 'd'){
        songPlay(d)
    }else if(e.key === 'r'){
        songPlay(r)
    }else if(e.key === 'f'){
        songPlay(f)
    }else if(e.key === 't'){
        songPlay(t)
    }else if(e.key === 'g'){
        songPlay(g)
    }else if(e.key === 'y') {
        songPlay(y)
    } else if(e.key === 'h') {
        songPlay(h)
    } else if(e.key === 'u'){
        songPlay(u)
    } else if(e.key === 'j'){
        songPlay(j)
    } else if(e.key === 'i'){
        songPlay(i)
    } else if(e.key === 'k'){
        songPlay(k)
    } else if(e.key === 'o'){
        songPlay(o)
    } else if(e.key === 'l'){
        songPlay(l)
    }
})