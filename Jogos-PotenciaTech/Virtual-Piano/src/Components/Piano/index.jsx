import './piano.css'
export const Piano = () => {
    return(
        <div id="pianoContent">
            {/* Header Piano */}
            <div id='headerPiano'>
                <h1>Virtual Piano</h1>

                <form>
                    {/* Input Range volume */}
                    <div>
                        <label>Volume</label>
                        <input type='range' min={0} max={10} defaultValue={1}/>
                    </div>

                    {/* Input Checkbox teclas */}
                    <div>
                        <label>Teclas</label>
                        <input type='checkbox' />
                    </div>
                </form>
            </div>

            {/* Componente das Teclas do piano */}
            <TeclasPiano/>

        </div>
    )
}


const TeclasPiano = () => {
    return(
        <div id='containerTeclasPiano'>
            <div className="teclas white"><span>a</span></div>
            <div className="teclas black"><span>w</span></div>
            <div className="teclas white"><span>s</span></div>
            <div className="teclas black"><span>e</span></div>
            <div className="teclas white"><span>d</span></div>
            <div className="teclas black"><span>r</span></div>
            <div className="teclas white"><span>f</span></div>
            <div className="teclas black"><span>t</span></div>
            <div className="teclas white"><span>g</span></div>
            <div className="teclas black"><span>y</span></div>
            <div className="teclas white"><span>h</span></div>
            <div className="teclas black"><span>u</span></div>
            <div className="teclas white"><span>j</span></div>
            <div className="teclas black"><span>i</span></div>
            <div className="teclas white"><span>k</span></div>
            <div className="teclas black"><span>i</span></div>
            <div className="teclas white"><span>l</span></div>
        </div>
    )
}