import {MdWavingHand} from 'react-icons/md'
import styles from '../Css/formulario.module.css'

function FormularioCms (){
    return(
        <div className={styles.formulario}>
        <h1>Seja bem-vindo(a) ao Jinni <MdWavingHand/> </h1>
            <input className={styles.input} type="text" placeholder="Nome" id='nome'></input>
            <input className={styles.input} type = "email" placeholder="Email" id='email'></input>
            <input className={styles.input} type = "password" placeholder="Senha" id='senha'></input>
            <input className={styles.input} type = "password" placeholder="Confirmar senha" id='confirmacao'></input>
        </div>
    )
}

export default FormularioCms