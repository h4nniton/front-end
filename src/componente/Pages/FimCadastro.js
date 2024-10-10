import img from '../img/confetti.gif'
import styles from '../Css/Fim.module.css'
import { useNavigate } from 'react-router-dom'


function FimCadastro() {
    const navigate = useNavigate();

    return (
        <div className={styles.tela}>
            <h1 className={styles.titulo}>Perfil criado com Sucesso!</h1>
            <p className={styles.texto}>clique em continuar para poder desfrutar dos serviços do Jinni!</p>

            <div className={styles.footer}>
                <img src={img} className={styles.img}></img>
                <button className={styles.butao} onClick={() => navigate('/TelaInicial')}> continuar</button>
                <img src={img} className={styles.img}></img>
            </div>

        </div>
    )
}

export default FimCadastro