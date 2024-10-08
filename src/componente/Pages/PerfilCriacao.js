import styles from '../Css/PerfilCriacao.module.css'
import App from '../Eventos/EventosCriarCard'
import img from '../img/Logo.png'
import { useNavigate } from 'react-router-dom'



function PerfilCriacao() {
    const navigate = useNavigate();


    return (
        <div>
            <div className={styles.header}>
                <img src={img} onClick={()=>navigate('/')}></img>
            </div>

            <h1>Selecione suas categorias</h1>
            <p className={styles.p}> selecione as áreas das quais você trabalha</p>

            <div id="categorias" className={styles.section}>
                <App/>
            </div>

            <button className={styles.botao} onClick={()=>navigate('/PerfilHabilidade')} >Continuar</button>
        </div>
    )

}

export default PerfilCriacao