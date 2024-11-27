import styles from '../Css/footer.module.css'
import { useNavigate } from 'react-router-dom'


function EventoLogin() {
    const navigate = useNavigate();

    async function meuEvento() {
        const emailCampo = document.getElementById('email').value
        const senhaCampo = document.getElementById('senha').value
        

        let logado = false
        
        if (emailCampo === '' || senhaCampo === '') {
            MySwal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo está faltando, preencha e tente novamente",
              });
        } else {
            try {
                const getClientes = await fetch('http://localhost:8080/v1/jinni/clientes')
                const getFreelancers = await fetch('http://localhost:8080/v1/jinni/freelancers')
                const listaClientes = await getClientes.json()
                const listaFreelancers = await getFreelancers.json()

                console.log(listaClientes);
                console.log(listaFreelancers);
                
                

                if(listaClientes.clientes){
                    listaClientes.clientes.forEach((usuario) => {
                        if (emailCampo === usuario.email_cliente && senhaCampo === usuario.senha_cliente) {
                            logado = true
                            navigate('/TelaInicial2', {state: {id_empresa: id_empresa}})
                        }
                    })
                }

                if(listaFreelancers.freelancers){
                    listaFreelancers.freelancers.forEach((usuario) => {
                        if (emailCampo == usuario.email_freelancer && senhaCampo == usuario.senha_freelancer) {
                            logado = true
                            console.log(emailCampo);
                            console.log(usuario.senha_freelancer);
                            navigate('/TelaInicial')
                        }
                    })
                }


                if (!logado) {
                    MySwal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Algo deu errado, confirme se preencheu tudo corretamente e tente novamente",
                      });
                }


            } catch (error) {



            }
        }
    }

    return (
        <div>
            <button className={styles.button} onClick={meuEvento}>Continuar</button>
        </div>
    )
}

export default EventoLogin