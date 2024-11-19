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
                    <p>categorias</p>
                    <div></div>
                    <p>habilidade</p>
                    <div></div>
                    <p>nível</p>
                </div>

                
            </div>

        </div>
    )
}

export default EditarPerfil;