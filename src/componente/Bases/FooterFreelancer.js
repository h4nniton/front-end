import EventoCadastroFreelancer from '../Eventos/EventoCadastroFreelancer'
import styles from '../Css/footer.module.css'
import { useNavigate } from 'react-router-dom'


function Footer (){
    const navigate = useNavigate();
    return(
        <div>
            <p> já possui conta? <p className={styles.link} onClick={()=>navigate('/Login')}> Entrar</p></p>
            <EventoCadastroFreelancer />

        </div>
    )
}

export default Footer