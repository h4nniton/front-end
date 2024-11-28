import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../../Css/perfilEmpresa.module.css'
import HeaderOficial2 from '../../Bases/HeaderOficial2.js'
import NavBar2 from '../../Bases/NavBar2.js';
import estrelas from '../../img/avaliacao.png';
import ProfilePhoto from '../../Bases/profileFoto';
import Inicio from './inicioEmpresa.js';
import Portfolio from './PortfolioEmpresa.js';
import Projetos from './ProjetosHistoricoEmpresa.js';


const EmpresaDetails = () => {

    const changeScreen = (screen, event) => {
        document.querySelectorAll(`.${style.selecionado}`).forEach(el => el.classList.remove(style.selecionado));
        event.currentTarget.classList.add(style.selecionado);
        setCurrentScreen(screen);
    };
    
    const { id } = useParams();
    const [currentScreen, setCurrentScreen] = useState(1);

    
    console.log("ID recebido via location:", id); // Console para checar o ID

    const [empresa, setEmpresa] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            // Se o ID não for null, faça a requisição
            fetchEmpresaDetails(id);
        } else {
            console.error("ID não encontrado");
            setError('ID não encontrado');
            setLoading(false);
        }
    }, [id]);

    const fetchEmpresaDetails = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/v1/jinni/cliente/${id}`);
            if (!response.ok) throw new Error("Erro ao buscar dados");
            const data = await response.json();
            setEmpresa(data);
        } catch (err) {
            setError('Erro ao carregar os dados da empresa');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;
    if (!empresa) return <div>Empresa não encontrada.</div>;
    console.log(empresa);
    

    return (
        <div className={style.telas}>
        <HeaderOficial2/>
        <div className={style.navegacao}>
            <NavBar2 />
            <div className={style.perfil}>
                <ProfilePhoto empresa={empresa} />
                <h1>{empresa.clientes && empresa.clientes.length > 0
                        ? empresa.clientes[0].nome_cliente
                        : "Not found"}</h1>                    
                <img src={estrelas} alt="Avaliação" />
                <p className={style.descricao}>{empresa.descricao || "Not found"}</p>
               

                
            </div>

            <div className={style.detalhe}>
                <ul className={style.navigate}>
                    <li onClick={(e) => changeScreen(1, e)} className={`${style.selecionado}`}>Início</li>
                    <li onClick={(e) => changeScreen(2, e)}>Portfólio</li>
                    <li onClick={(e) => changeScreen(3, e)}>Projetos</li>
                </ul>
                <div>
                    {currentScreen === 1 && <Inicio style={style} key={empresa.id} />}
                    {currentScreen === 2 && <Portfolio style={style} key={empresa.id} />}
                    {currentScreen === 3 && <Projetos style={style} key={empresa.id} />}
                </div>
            </div>
        </div>
    </div>
    );
};


// const EmpresaDetails = () => {
//     const { id } = useParams();
//     console.log(id);
    
//     const [empresa, setEmpresa] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const navigate = useNavigate();
//     
//     useEffect(() => {
//         const fetchEmpresaDetails = async () => {
//             try {
//                 const response = await fetch(`http://localhost:8080/v1/jinni/cliente/${id}`); // Ajuste o endpoint
//                 if (!response.ok) throw new Error("Erro ao buscar dados");
//                 const data = await response.json();
//                 setEmpresa(data);
//             } catch (err) {
//                 setError('Erro ao carregar os dados da empresa');
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchEmpresaDetails();
//     }, [id]);

//     if (loading) return <div>Carregando...</div>;
//     if (error) return <div>{error}</div>;
//     if (!empresa) return <div>Empresa não encontrada.</div>;

    

//     return (
     
//     );
// };

export default EmpresaDetails;