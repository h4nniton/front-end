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
            Swal.fire({
                title: "Algo errado",
                text: "algo está faltando preencha tudo corretamente ",
                icon: "warning",
              })
        } else {
            if (confirmarcaoCampo != senhaCampo) {
                MySwal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "senhas incompativeis, tente novamente",
                  });
            } else {
                const adulto = eAdulto(dataNascimentoCampo)

                if (!adulto) {
                    MySwal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Menores de idade não podem ser cadastrados",
                      });
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

                        let resultCadastro = await postFreelancer(novoUsuario)
                        validarCadastro = await resultCadastro

                        if (validarCadastro.status_code == 201) {
                            let id_freelancer = resultCadastro.freelancer.id_freelancer
                            console.log(id_freelancer);
                            Swal.fire({
                                title: "Bem vindo freelancer!",
                                text: "Sua conta foi criada com sucesso",
                                icon: "success"
                              });
                            navigate('/CriacaoDePerfil', {state: {id_freelancer: id_freelancer}})

                        } else {
                            alert(validarCadastro.status_code)
                        }

                    } catch (error) {
                        MySwal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Email ou cpf já cadastrado!",
                          });
                        console.log(error);
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