import styles from '../Css/NavBar.module.css'
import home from '../img/home.png'
import projetos from '../img/projeto.png'
import notificacoes from '../img/notificacao.png'
import conversas from '../img/conversas.png'

function NavBar() {
    return (
        <div className={styles.main}>
            <div className={styles.navegacoes}>
                <div>
                    <img src={home} className={styles.img}></img>
                    <p className={styles.p}>home</p>
                </div>

                <div>
                    <img src={projetos} className={styles.img}></img>
                    <p className={styles.p}>projetos</p>
                </div>

                <div>
                    <img src={notificacoes} className={styles.img}></img>
                    <p className={styles.p}>notificacoes</p>
                </div>

                <div>
                    <img src={conversas} className={styles.img}></img>
                    <p className={styles.p}>conversas</p>
                </div>

            </div>

        </div>
    )
}

export default NavBar