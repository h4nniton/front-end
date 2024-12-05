import HeaderOficial from '../../Bases/HeaderOficial.js';
import NavBar from '../../Bases/NavBar2.js';
import style from '../../Css/projetos.module.css';
import React, { useEffect, useState } from 'react';
import Inicio from './NegocioFechado.js';
import Portfolio from './PagamentoRealizado.js';
import Projetos from './ProjetosAndamento.js';
import ProjetosFinalizados from './ProjetosFinalizados.js';
import Milestone from '../../Bases/milestone.js'

function Projetoss() {
    const [currentScreen, setCurrentScreen] = useState(1);
    const [empresa, setEmpresa] = useState({}); // Inicializando como um objeto vazio para evitar problemas com `empresa.id`

    const changeScreen = (screen, event) => {
        document
            .querySelectorAll(`.${style.selecionado}`)
            .forEach((el) => el.classList.remove(style.selecionado));
        event.currentTarget.classList.add(style.selecionado);
        setCurrentScreen(screen);
    };

    return (
        <div>
            <HeaderOficial />
            <div className={style.tela}>
                <NavBar />
                <Milestone/>
                
            </div>
        </div>
    );
}

export default Projetoss;
