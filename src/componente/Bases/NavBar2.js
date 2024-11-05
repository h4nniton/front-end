import styles from '../Css/NavBar.module.css'
import home from '../img/home.png'
import projetos from '../img/projeto.png'
import notificacoes from '../img/notificacao.png'
import conversas from '../img/conversas.png'
import { useNavigate } from 'react-router-dom'


function NavBar() {
    const navigate = useNavigate();

    return (
        <div className={styles.main}>

            <div className={styles.navegacoes}>
                <div onClick={() => {
                    navigate('/TelaInicial2')
                }}>
                    <img src={home} className={styles.img}></img>
                    <p className={styles.p}>home</p>
                </div>

                <div onClick={()=>{
                            navigate('/Projetos')
                        }}>
                    <img src={projetos} className={styles.img}></img>
                    <p className={styles.p}>projetos</p>
                </div>

                <div onClick={()=>{
                            navigate('/Notificacoes')
                        }}>
                    <img src={notificacoes} className={styles.img}></img>
                    <p className={styles.p}>notificacoes</p>
                </div>

                <div onClick={()=>{
                            navigate('/Mensagens')
                        }}>
                    <img src={conversas} className={styles.img}></img>
                    <p className={styles.p}>conversas</p>
                </div>

            </div>

        </div>
    )
}

export default NavBar