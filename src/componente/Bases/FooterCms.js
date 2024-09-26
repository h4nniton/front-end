import EventoCadastroCms from '../Eventos/EventoCadastroCms'
import styles from '../Css/footer.module.css'
import { useNavigate } from 'react-router-dom'


function FooterCms (){
    const navigate = useNavigate();
    return(
        <div>
            <p> já possui conta? <p className={styles.link} onClick={()=>navigate('/Login')}> Entrar</p></p>
            <EventoCadastroCms />

        </div>
    )
}

export default FooterCms