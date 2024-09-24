import EventoCadastroFreelancer from '../Eventos/EventoCadastroFreelancer'
import styles from '../Css/footer.module.css'

function Footer (){
    return(
        <div>
            <p> já possui conta? <p className={styles.link}> Entrar</p></p>
            <EventoCadastroFreelancer />

        </div>
    )
}

export default Footer