import styles from '../Css/footer.module.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function EventoLogin() {
    const navigate = useNavigate();

    async function meuEvento() {
        const emailCampo = document.getElementById('email').value;
        const senhaCampo = document.getElementById('senha').value;

        let logado = false;

        if (emailCampo === '' || senhaCampo === '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo está faltando, preencha e tente novamente",
            });
            return; // Interrompe a execução da função
        }

        try {
            // Fetch das listas de clientes e freelancers
            const [getClientes, getFreelancers] = await Promise.all([
                fetch('http://localhost:8080/v1/jinni/clientes'),
                fetch('http://localhost:8080/v1/jinni/freelancers')
            ]);

            const listaClientes = await getClientes.json();
            const listaFreelancers = await getFreelancers.json();

            console.log(listaClientes);
            console.log(listaFreelancers);

            // Validação dos clientes
            if (listaClientes.clientes) {
                listaClientes.clientes.forEach((usuario) => {
                    if (emailCampo === usuario.email_cliente && senhaCampo === usuario.senha_cliente) {
                        logado = true;
                        const id = usuario.id;
                         // Recupera o id_empresa do cliente
                        navigate('/TelaInicial2', { state: { id } });
                    }
                });
            }

            // Validação dos freelancers
            if (listaFreelancers.freelancers) {
                listaFreelancers.freelancers.forEach((usuario) => {
                    if (emailCampo === usuario.email_freelancer && senhaCampo === usuario.senha_freelancer) {
                        logado = true;
                        const id = usuario.id;
                        localStorage.setItem("id", id)
                    
                        navigate('/TelaInicial', {state:{ id }}); // Redireciona freelancers
                    }
                });
            }

            // Caso nenhum usuário seja encontrado
            if (!logado) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo deu errado, confirme se preencheu tudo corretamente e tente novamente",
                });
            }
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
            Swal.fire({
                icon: "error",
                title: "Erro de Conexão",
                text: "Não foi possível conectar ao servidor. Tente novamente mais tarde.",
            });
        }
    }

    return (
        <div>
            <button className={styles.button} onClick={meuEvento}>Continuar</button>
        </div>
    );
}

export default EventoLogin;
