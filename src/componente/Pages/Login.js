import styles from '../Css/formulario.module.css'
import {MdWavingHand} from 'react-icons/md'
import Footer from '../Bases/FooterLogin'


function Login (){
    return(
        <div className={styles.formulario}>
            <h1>bem-vindo(a) de volta ao Jinni <MdWavingHand/> </h1>
            <input className={styles.input} type="email" id="email" placeholder="Email"></input>
            <input className={styles.input} type="password" id="senha" placeholder="Senha"></input>
            <Footer/>

        </div>
    )
}

export default Login