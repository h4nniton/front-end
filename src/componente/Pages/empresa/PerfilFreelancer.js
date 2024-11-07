import HeaderOficial from '../../Bases/HeaderOficial.js'
import NavBar from '../../Bases/NavBar2.js'
import img from '../../img/image 1.png'
import estrelas from '../../img/avaliacao.png'
import style from '../../Css/perfilFreelancer.module.css'
import { useNavigate } from 'react-router-dom'


function PerfilFreelancer() {
    const navigate = useNavigate();

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
                </div>
            </div>

        </div>
    )
}

export default PerfilFreelancer