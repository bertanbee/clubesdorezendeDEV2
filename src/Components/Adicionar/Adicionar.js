import React from 'react';

import './adicionar.css';

function Adicionar() {
    return (
        <div className="adicionarBox">
            <div className="adicionar">
                <div className="subadicionar">
                    <div className="img"></div>
                    <div className="adicionarInfo">
                        <h1 className="adicionarTitle">Não encontrou o clube perfeito para você?</h1>
                        <p className="adicionarDescription"><h2 className="adicionarDescriptionTitle">Você pode criar o seu!</h2>Você só precisa encontrar mais 2 pessoas que participarão contigo! Qualquer assunto é permitido! <br></br> Para isso, basta mandar a sua requisição no formulário que pode ser acessado no botão abaixo 👇 <br></br> Mais informações informações são acessíveis no regulamento na aba "Atalhos".</p>
                    </div>
                </div>  
                <div className="buttonBox">
                    <button className="button">FORMULÁRIO</button>  
                </div>
            </div>
            
            
        </div>
    );
}

export default Adicionar;
