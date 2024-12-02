import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../../Css/perfilEmpresa.module.css';
import HeaderOficial from '../../Bases/HeaderOficial.js';
import NavBar from '../../Bases/NavBar.js';
import estrelas from '../../img/avaliacao.png';
import ProfilePhoto from '../../Bases/profileFoto';
import Inicio from './inicioFreelancer.js';
import Portfolio from './PortfolioFreelancer.js';
import Projetos from './ProjetosHistoricoFreelancer.js';

const FreelancerDetails = () => {
    const { id } = useParams(); // Pega o ID da URL
    const [freelancer, setFreelancer] = useState(null); // Armazena os dados do freelancer
    const [currentScreen, setCurrentScreen] = useState(1); // Gerencia a tela atual
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [error, setError] = useState(null); // Estado de erro

    // Função para alternar entre as telas (Início, Portfólio, Projetos)
    const changeScreen = (screen, event) => {
        document.querySelectorAll(`.${style.selecionado}`).forEach((el) => el.classList.remove(style.selecionado));
        event.currentTarget.classList.add(style.selecionado);
        setCurrentScreen(screen);
    };

    // Busca os dados do freelancer ao carregar o componente
    useEffect(() => {
        const fetchFreelancerDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/v1/jinni/freelancer/${id}`);
                if (!response.ok) throw new Error('Erro ao buscar dados do freelancer');
                const data = await response.json();
                setFreelancer(data); // Define os dados do freelancer
            } catch (err) {
                setError('Erro ao carregar os dados do freelancer');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchFreelancerDetails();
        } else {
            setError('ID do freelancer não fornecido');
            setLoading(false);
        }
    }, [id]);

    // Retorna mensagens de carregamento ou erro, se aplicável
    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;
    if (!freelancer) return <div>Freelancer não encontrado.</div>;

    // Renderiza o componente principal
    return (
        <div className={style.telas}>
            <HeaderOficial />
            <div className={style.navegacao}>
                <NavBar />
                <div className={style.perfil}>
                    {/* Foto de perfil */}
                    <ProfilePhoto freelancer={freelancer} />
                    {/* Nome do freelancer */}
                    <h1>
                        {freelancer.nome_freelancer || 'Nome não disponível'}
                    </h1>
                    {/* Estrelas de avaliação */}
                    <img src={estrelas} alt="Avaliação" />
                    {/* Descrição */}
                    <p className={style.descricao}>
                        {freelancer.descricao || 'Descrição não informada'}
                    </p>
                </div>

                {/* Navegação entre as telas */}
                <div className={style.detalhe}>
                    <ul className={style.navigate}>
                        <li
                            onClick={(e) => changeScreen(1, e)}
                            className={`${style.selecionado}`}
                        >
                            Início
                        </li>
                        <li onClick={(e) => changeScreen(2, e)}>Portfólio</li>
                        <li onClick={(e) => changeScreen(3, e)}>Projetos</li>
                    </ul>
                    {/* Renderiza a tela correspondente */}
                    <div>
                        {currentScreen === 1 && <Inicio style={style} freelancer={freelancer} />}
                        {currentScreen === 2 && <Portfolio style={style} freelancer={freelancer} />}
                        {currentScreen === 3 && <Projetos style={style} freelancer={freelancer} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreelancerDetails;
