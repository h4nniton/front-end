import HeaderOficial from '../../Bases/HeaderOficial.js';
import NavBar from '../../Bases/NavBar2.js';
import style from '../../Css/projetos.module.css';
import React, { useEffect, useState } from 'react';
import Inicio from './NegocioFechado.js';
import Portfolio from './PagamentoRealizado.js';
import Projetos from './ProjetosAndamento.js';
import ProjetosFinalizados from './ProjetosFinalizados.js';

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
            <div>
                <NavBar />
                <div className={style.detalhe}>
                    <ul className={style.navigate}>
                        <li
                            onClick={(e) => changeScreen(1, e)}
                            className={`${style.selecionado}`}
                        >
                            Negócio Fechado
                        </li>
                        <li onClick={(e) => changeScreen(2, e)}>
                            Pagamentos
                        </li>
                        <li onClick={(e) => changeScreen(3, e)}>
                            Projetos em Andamento
                        </li>
                        <li onClick={(e) => changeScreen(4, e)}>
                            Projetos Finalizados
                        </li>
                    </ul>
                    <div>
                        {currentScreen === 1 && (
                            <Inicio style={style} key="screen-1" />
                        )}
                        {currentScreen === 2 && (
                            <Portfolio style={style} key="screen-2" />
                        )}
                        {currentScreen === 3 && (
                            <Projetos style={style} key="screen-3" />
                        )}
                        {currentScreen === 4 && (
                            <ProjetosFinalizados style={style} key="screen-4" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projetoss;
