import HeaderOficial from '../../Bases/HeaderOficial.js'
import Inicio from './InicioFreelancer.js'
import Projetos from './ProjetosHistorico.js'
import Portfolio from './Portfolio.js'


import NavBar from '../../Bases/NavBar2.js'
import img from '../../img/image 1.png'
import estrelas from '../../img/avaliacao.png'
import style from '../../Css/perfilFreelancer.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function PerfilFreelancer() {
    const navigate = useNavigate();
    const [currentScreen, setCurrentScreen] = useState(1);

    function changeScreen(screen, event) {
        document.querySelectorAll(`.${style.selecionado}`).forEach(el => {
            el.classList.remove(style.selecionado);
        });
        event.currentTarget.classList.add(style.selecionado);
        setCurrentScreen(screen);
    }
    return (
        <div className={style.telas}>
            <HeaderOficial />
            <div className={style.navegacao}>
                <NavBar />
                <div className={style.perfil}>
                    <img src={img}></img>
                    <h1>Afonso</h1>
                    <img src={estrelas}></img>
                    <p className={style.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida pellentesque mi sed gravida. Morbi pellentesque at elit sed mattis. Ut non velit orci. Aliquam hendrerit ipsum s</p>
                    <button className={style.botao} onClick={() => {
                        navigate('/Mensagens')
                    }}>enviar proposta particular</button>
                    <p>categorias</p>
                    <div></div>
                    <p>habilidade</p>
                    <div></div>
                    <p>nível</p>
                </div>

                <div className={style.detalhe}> 
                    <ul className={style.navigate}>
                        <li onClick={(e) => changeScreen(1, e)} className={`${style.selecionado}`}>Início</li>
                        <li onClick={(e) => changeScreen(2, e)} className={``}>Portfólio</li>
                        <li onClick={(e) => changeScreen(3, e)} className={``}>Projetos</li>
                    </ul>
                    <div>
                        {currentScreen === 1 ? (
                            <Inicio style={style} />
                        ) : currentScreen === 2 ? (
                            <Portfolio style={style} />
                        ) : (
                            <Projetos style={style} />
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PerfilFreelancer