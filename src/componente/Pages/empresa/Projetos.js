import HeaderOficial from '../../Bases/HeaderOficial.js'
import NavBar from '../../Bases/NavBar2.js'
import style from '../../Css/projetos.module.css'
import React, { useEffect, useState } from 'react';
import Inicio from './NegocioFechado.js';
import Portfolio from './PagamentoRealizado.js';
import Projetos from './ProjetosAndamento.js';
import ProjetosFinalizados from './ProjetosFinalizados.js';




function Projetoss (){
    const changeScreen = (screen, event) => {
        document.querySelectorAll(`.${style.selecionado}`).forEach(el => el.classList.remove(style.selecionado));
        event.currentTarget.classList.add(style.selecionado);
        setCurrentScreen(screen);
    };

    const [currentScreen, setCurrentScreen] = useState(1);
    const [empresa, setEmpresa] = useState(null);


    return(
        <div>
            <HeaderOficial/>
            <div>
                <NavBar/>
                <div className={style.detalhe}>
                <ul className={style.navigate}>
                    <li onClick={(e) => changeScreen(1, e)} className={`${style.selecionado}`}>negocio fechado </li>
                    <li onClick={(e) => changeScreen(2, e)}>pagamento realizado</li>
                    <li onClick={(e) => changeScreen(3, e)}>projetos em andamento</li>
                    <li onClick={(e) => changeScreen(4, e)}>projetos finalizados</li>

                </ul>
                <div>
                    {currentScreen === 1 && <Inicio style={style} key={empresa.id} />}
                    {currentScreen === 2 && <Portfolio style={style} key={empresa.id} />}
                    {currentScreen === 3 && <Projetos style={style} key={empresa.id} />}
                    {currentScreen === 4 && <ProjetosFinalizados style={style} key={empresa.id} />}
                </div>
            </div>
                
            </div>

        </div>
    )
}

export default Projetoss



