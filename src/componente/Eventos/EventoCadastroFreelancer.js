import { postFreelancer } from "../integração/funcao.js"
import styles from '../Css/footer.module.css'
import { useNavigate } from 'react-router-dom'


function eAdulto(valorDataNascimento) {
    const dataAtual = new Date();
    const dataNascimento = new Date(valorDataNascimento);

    let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    const diferencaMeses = dataAtual.getMonth() - dataNascimento.getMonth();

    if (diferencaMeses < 0 || (diferencaMeses === 0 && dataAtual.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    return idade >= 18;
}

function EventoCadastro() {
    const navigate = useNavigate();

    async function meuEvento() {
        const nomeCampo = document.getElementById('nome').value
        const emailCampo = document.getElementById('email').value
        const senhaCampo = document.getElementById('senha').value
        const confirmarcaoCampo = document.getElementById('confirmacao').value
        const cpfCampo = document.getElementById('cpf').value
        const dataNascimentoCampo = document.getElementById('dataNascimento').value

        if (nomeCampo == '' || dataNascimentoCampo == '' || cpfCampo == '' || emailCampo == '' || senhaCampo == '' || confirmarcaoCampo == '') {
            alert('Preencha os campos corretamente!')
        } else {
            if (confirmarcaoCampo != senhaCampo) {
                alert('Senhas incompativeis')
            } else {
                const adulto = eAdulto(dataNascimentoCampo)
                
                if(!adulto){
                    alert("O usuário é menor de 18. Pode não!")
                } else {
                    let validarCadastro = '';

                    try {
                        const novoUsuario = {
                            nome_freelancer: nomeCampo,
                            data_nascimento: dataNascimentoCampo,
                            cpf_freelancer: cpfCampo,
                            email_freelancer: emailCampo,
                            senha_freelancer: senhaCampo,
                        }
    
                        let resultCadastro = await fetch('http://localhost:8080/v1/jinni/freelancer', {
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
                        navigate('/CriacaoDePerfil')
    
                    } else {
                        alert(validarCadastro.status_code)
                    }

                }

            

            }
        }

    }

    return (
        <div>
            <button className={styles.button} onClick={meuEvento} >Continuar</button>
        </div>
    )


}
export default EventoCadastro