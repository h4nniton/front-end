import styles from '../Css/PerfilCriacao.module.css'
import img from '../img/Logo.png'
import EventoGerarCard from '../Eventos/EventoGerarCard'


function PerfilCriacao() {

    return (
        <div>
            <div className={styles.header}>
                <img src={img}></img>
            </div>

            <h1>Selecione suas categorias</h1>
            <p className={styles.p}> selecione as áreas das quais você trabalha</p>

            <div id="categorias" className={styles.section}>
                <EventoGerarCard/>
            </div>
        </div>
    )

}

export default PerfilCriacao