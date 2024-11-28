import styles from '../Css/HeaderOficial.module.css';
import image from '../img/Logo.png';
import img from "../img/avatar.png";
import { useNavigate } from 'react-router-dom';

function HeaderOficial({ id }) {
    console.log("ID recebido no HeaderOficial:", id);  // Verifique o valor de id

    const navigate = useNavigate();

    return (
        <div>
            <div className={styles.header}>
                {/* Logo que redireciona para a página inicial */}
                <img 
                    src={image} 
                    alt="Logo da empresa" 
                    onClick={() => navigate('/')} 
                />

                <div className={styles.user}>
                    {/* Nome do usuário (aqui poderia ser dinâmico se fornecido via props ou API) */}
                    <p>Nome do Usuário</p>
                    
                    {/* Link para o perfil do cliente usando o ID fornecido */}
                        <img src={img} alt="Avatar do usuário"  onClick={() => navigate(`/cliente/${id}`)}/>
                    
                </div>
            </div>
        </div>
    );
}



export default HeaderOficial;
