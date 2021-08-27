import React from 'react';

import './clube.css';

function Clube(props) {
    return (
        <div className="clubeBox">
            <div className="clube">
                <div className="subclube">
                    <img className="img" src={props.link} alt={props.title}></img>
                    <div className="clubeInfo">
                        <h1 className="clubeTitle">{props.title}</h1>
                        <p className="clubeDescription"><h2 className="clubeDescriptionTitle">Descrição: </h2>{props.description}</p>
                    </div>
                </div>  
                <div className="buttonBox">
                    <button className="button">PARTICIPAR</button>  
                </div>
            </div>
            
            
        </div>
    );
}

export default Clube;
