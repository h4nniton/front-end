import FormularioBase from '../Bases/FormularioBase.js'
import styles from '../Css/formularioCms.module.css'
import Footer from '../Bases/FooterCms.js';


function FormularioCms (){
    return(
        <div className={styles.formulario}>
            <FormularioBase/>
            <input className={styles.input} type='' placeholder='CNPJ' id='cnpj'></input>
            <Footer/>

        </div>
    )
}

export default FormularioCms