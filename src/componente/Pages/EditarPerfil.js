import HeaderOficial from '../Bases/HeaderOficial.js'
import editar from '../img/ferramenta-lapis.png'
import NavBar from '../Bases/NavBar.js'
import img from '../img/image 1.png'
import estrelas from '../img/estrelas.png'
import style from '../../Css/editarPerfil.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function EditarPerfil() {
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
                    <img className={style.editar} src={editar} onClick={() => {
                        navigate('/Editar-Perfil')
                    }}></img>
                    <img src={img}></img>
                    <h1>Afonso</h1>
                    <img src={estrelas}></img>
                    <p className={style.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida pellentesque mi sed gravida. Morbi pellentesque at elit sed mattis. Ut non velit orci. Aliquam hendrerit ipsum s</p>
                    <p>Categorias</p>
                    <div className={style.card}>Front-End</div>
                    <p>Habilidade</p>
                    <div className={style.card}>JavaScript</div>
                    <p>Nível</p>
                    <div className={style.card}>Experiente</div>
                    
                    <button className={style.excluir}>Excluir conta</button>

                </div>

                <div className={style.formularioEdicao}>
                    <div className={style.nomeUsuario}>
                        <h1>Nome de usuário</h1>
                        <input type='text' value='Afonso de Almeida'></input>
                        <h1>E-mail</h1>
                        <input type='email' value='afonsoalmeida@gmail.com' disabled></input>
                        <h1>Senha</h1>
                        <input type='password' value='12345678' disabled></input>
                        <h1>CPF</h1>
                        <input type='number' value='000.000.000-00' disabled></input>
                        <h1>Descrição</h1>
                        <input type='text' value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices at ipsum eu eleifend. Nam id consectetur mauris, quis posuere nulla. Ut vitae massa eu tortor vehicula convallis. Sed fringilla nulla a sapien dapibus, sed hendrerit sapien elementum. Curabitur elementum non libero eget dapibus. Donec eu felis sit amet dolor vehicula placerat.'></input>
                        <h1>Habilidades</h1>

                        <div className={style.final}>

                            <div className={style.habilidadesCard}>
                                <div className={style.card}>JavaScript</div>
                                <div className={style.card}>React</div>
                                <div className={style.card}>Kotlin</div>
                                <div className={style.card}>Java</div>
                                <div className={style.card}>CSS</div>
                            </div>

                            <div className={style.botoes}>
                                <button className={style.descartar}>Descartar alterações</button>
                                <button className={style.salvar}>Salvar alterações</button>
                            </div>

                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default EditarPerfil;