import FormularioBase from '../Bases/FormularioBase'
import styles from '../Css/formularioFreelancer.module.css'
import Footer from '../Bases/FooterFreelancer';


function FormularioFreelancer (){
    return(
    
        <div className={styles.formulario}>
            <FormularioBase/>
            <input className={styles.input} type='' placeholder='cpf' id='cpf'></input>
            <input className={styles.input} type='date' placeholder='Data de nascimento' id='dataNascimento'></input>
            <Footer/>

        </div>
    )
}

export default FormularioFreelancer