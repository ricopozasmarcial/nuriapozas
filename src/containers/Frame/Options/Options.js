import React, { useRef } from "react";
import Platos from '../Platos/Platos';
import { OptionsDiv } from './Options.style';


function App() {
    const ref = useRef(null);
    var id = "";
    document.addEventListener('click', function (e) {
        id = e.target.id;
    }, false);

    const handleClick = () => {
        ref.current.showToast(id);
    };

    return (
        <OptionsDiv className="App">
            <h1 className="title">Opciones</h1>
            <button className="bigBtn" id="prueba" onClick={handleClick}>
                Cambiar Imagen
        </button>
            <button className="bigBtn" id="prueba2" onClick={handleClick}>
                Cambiar Imagen 2
        </button>
            <button className="bigBtn" id="prueba3" onClick={handleClick}>
                Cambiar Imagen 3
        </button>
            <Platos ref={ref} />
        </OptionsDiv>
    );
}

export default App;