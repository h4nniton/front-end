import EventoLogin from '../Eventos/EventoLogin.js'
import styles from '../Css/footer.module.css'
import { useNavigate } from 'react-router-dom'


function FooterLogin (){
    const navigate = useNavigate();
    return(
        <div>
            <p> já possui conta? <button className={styles.link} onClick={()=>navigate('/Cadastro')}> Cadastre-se</button></p>
            <EventoLogin />

        </div>
    )
}

export default FooterLogin