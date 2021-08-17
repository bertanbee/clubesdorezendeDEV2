import React from 'react';

import { BiCloudDownload, BiMessage, BiFile } from 'react-icons/bi'

import "./atalhos.css";

function Atalhos() {
    return (
        <div className="atalhosBox">
            <p className="atalhosIndicator">Atalhos: </p>
            <div className="atalhos">
                <div className="atalhoItem">
                    <BiCloudDownload fontSize="64px" fill="rgb(247, 247, 247)"></BiCloudDownload>
                    <p className="atalhoName">REGULAMENTO</p>
                </div>
                <div className="atalhoItem">
                    <BiMessage fontSize="64px" fill="rgb(247, 247, 247)"></BiMessage>
                    <p className="atalhoName">CONTATO</p>
                </div>
                <div className="atalhoItem">
                    <BiFile fontSize="64px" fill="rgb(247, 247, 247)"></BiFile>
                    <p className="atalhoName">FORMULÁRIO</p>
                </div>
            </div>
        </div>
    );
}

export default Atalhos;