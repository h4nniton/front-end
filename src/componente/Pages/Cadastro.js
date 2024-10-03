import styles from '../Css/cadastro.module.css'
import Header2 from '../Bases/Header2'
import EventoButao from '../Eventos/EventoButao'


function Cadastro() {
    return (
        <div>
            <Header2 />
            <div className={styles.tela}>
                <h1 className={styles.h1}>Cadastrar-se como um cliente ou como um freelancer?</h1>
                <EventoButao/>

            </div>
        </div>


    )
}

export default Cadastro