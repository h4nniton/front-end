import EventoCadastroCms from '../Eventos/EventoCadastroCms'
import styles from '../Css/footer.module.css'

function FooterCms (){
    return(
        <div>
            <p> já possui conta? <p className={styles.link}> Entrar</p></p>
            <EventoCadastroCms />

        </div>
    )
}

export default FooterCms