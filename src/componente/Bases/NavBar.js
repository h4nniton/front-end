import styles from '../Css/NavBar.module.css'
import home from '../img/home.png'
import projetos from '../img/projeto.png'
import notificacoes from '../img/notificacao.png'
import conversas from '../img/conversas.png'
import { useNavigate } from 'react-router-dom'
import Mensagens from '../Pages/empresa/Mensagens'


function NavBar() {
    const navigate = useNavigate();

    return (
        <div className={styles.main}>
            <div className={styles.navegacoes}>
            <div onClick={() => {
                    navigate('/TelaInicial')
                }}>
                    <img src={home} className={styles.img}></img>
                    <p className={styles.p}>home</p>
                </div>

                <div onClick={() => {
                    navigate('/ProjetosFreelancer')
                }}>
                    <img src={projetos} className={styles.img}></img>
                    <p className={styles.p}>projetos</p>
                </div>

                <div onClick={() => {
                    navigate('/NotificacoesFreelancer')
                }}>
                    <img src={notificacoes} className={styles.img}></img>
                    <p className={styles.p}>notificações</p>
                </div>

                <div onClick={() => {
                    navigate('/MensagensFreelancer')
                }}>
                    <img src={conversas} className={styles.img}></img>
                    <p className={styles.p}>mensagens</p>
                </div>

            </div>

        </div>
    )
}

export default NavBar