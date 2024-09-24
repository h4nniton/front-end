import EventoLogin from '../Eventos/EventoLogin.js'
import styles from '../Css/footer.module.css'

function FooterLogin (){
    return(
        <div>
            <p> já possui conta? <p className={styles.link}> Cadastrar</p></p>
            <EventoLogin />

        </div>
    )
}

export default FooterLogin