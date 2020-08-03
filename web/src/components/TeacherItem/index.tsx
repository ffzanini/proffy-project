import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/20977822?s=460&u=3dbe9c97be5fa90e024edd449559965b79e4b252&v=4" alt="Felipe Zanini"/>
                <div>
                    <strong>Felipe Frantz Zanini</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de matemática avançada
                <br/><br/>
                Apaixonado por fazer cálculos absurdos e por mudar a vida das pessoas através de números que não fazem o menor sentido pra ninguém a não ser pra ele mesmo
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whats"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;