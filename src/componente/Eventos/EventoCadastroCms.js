import { postCliente } from "../integração/funcao.js"
import styles from '../Css/footer.module.css'

function EventoCadastro() {

    async function meuEvento() {
        const nomeCampo = document.getElementById('nome').value
        const emailCampo = document.getElementById('email').value
        const senhaCampo = document.getElementById('senha').value
        const confirmarcaoCampo = document.getElementById('confirmacao').value
        const cnpjCampo = document.getElementById('cnpj').value

        if (nomeCampo == '' || emailCampo == '' || senhaCampo == '' || confirmarcaoCampo == '' || cnpjCampo == '') {
            alert('Preencha os campos corretamente!')
        } else {
            if (confirmarcaoCampo != senhaCampo) {
                alert('senhas incompativeis')
            } else {
                let validarCadastro = '';

                try {
                    const novoUsuario = {
                        nome_cliente: nomeCampo,
                        cnpj_cliente: cnpjCampo,
                        email_cliente: emailCampo,
                        senha_cliente: senhaCampo,
                    }

                    let resultCadastro = await fetch('http://localhost:8080/v1/jinni/cliente', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },

                        body: JSON.stringify(novoUsuario)
                    })

                    validarCadastro = await resultCadastro.json()

                } catch (error) {
                    alert('⚠︎ Erro')
                    console.log(error);
                }

                if (validarCadastro.status_code == 201) {
                    alert('Cadastro concluído!')

                } else {
                    alert(validarCadastro.status_code)
                }

            }
        }

    }

    return (
        <div>
            <button className={styles.button} onClick={meuEvento}>Continuar</button>
        </div>
    )


}
export default EventoCadastro