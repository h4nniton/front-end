import styles from '../Css/PerfilCriacao.module.css'
import App from '../Eventos/EventosCriarCard'
import img from '../img/Logo.png'
import { useNavigate } from 'react-router-dom'



function PerfilCriacao() {
    const navigate = useNavigate();
    const array = []

    const cadastrar = () => {
        
    }

    const handleClick = () => {
        if(array.length > 0){
            cadastrar()
            navigate('/PerfilHabilidade')
        }else {
            alert('tá vazia saporra')
        }
    }

    return (
        <div>
            <div className={styles.header}>
                <img src={img} onClick={()=>navigate('/')}></img>
            </div>

            <h1>Selecione suas categorias</h1>
            <p className={styles.p}> selecione as áreas das quais você trabalha</p>

            <div id="categorias" className={styles.section}>
                <App array={array}/>
            </div>


            <button className={styles.botao} onClick={handleClick} >Continuar</button>
        </div>
    )

}

export default PerfilCriacao