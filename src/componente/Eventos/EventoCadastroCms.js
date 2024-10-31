import { postCliente, postFreelancer } from "../integração/funcao.js"
import styles from '../Css/footer.module.css'
import { useNavigate } from 'react-router-dom'


function EventoCadastro() {
    const navigate = useNavigate();


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

                    let resultCadastro = await postCliente(novoUsuario)

                    validarCadastro = await resultCadastro.json()
                    if (validarCadastro.status_code == 201) {
                        let id_freelancer = resultCadastro.freelancer.id_freelancer
                        console.log(id_freelancer);
                        alert('Cadastro concluído!')
                        navigate('/CriacaoDePerfil', {state: {id_freelancer: id_freelancer}})

                    } else {
                        alert(validarCadastro.status_code)
                    }


                } catch (error) {
                    alert('⚠︎ Erro')
                    console.log(error);
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