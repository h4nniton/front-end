import styles from '../Css/PerfilCriacao.module.css'
import App from '../Eventos/EventoCriarHabilidade.js'
import img from '../img/Logo.png'
import { useNavigate } from 'react-router-dom'

function PerfilHabilidade (){
   const navigate = useNavigate();


    return (
        <div>
            <div className={styles.header}>
                <img src={img} onClick={()=>navigate('/')}></img>
            </div>

            <h1>Selecione suas habilidades</h1>
            <p className={styles.p}> Selecione as habilidades das quais você possui o conhecimento</p>

            <div id="categorias" className={styles.section}>
                <App/>
            </div>

            <button className={styles.botao} onClick={()=>navigate('/FimCadastro')} >Criar Conta</button>
        </div>
    )

}

export default PerfilHabilidade