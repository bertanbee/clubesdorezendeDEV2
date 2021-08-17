import React from 'react';

import './header.css';
import Gremio from './gremioestudantilpaulista.png';

function Header() {
    return (
        <div className="head">
            <img height="60px" width="60px" src={Gremio} alt="Imagem: Grêmio Estudantil Paulista"></img>
            <p id="title"><h3>CLUBES DO REZENDE</h3><br></br><p id="welcome">Seja bem-vindo(a)!</p></p>
            <div id="simbolorezende"></div>
        </div>
    );
}

export default Header;