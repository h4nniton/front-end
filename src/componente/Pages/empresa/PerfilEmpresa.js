import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from '../../Css/perfilFreelancer.module.css';
import HeaderOficial from '../../Bases/HeaderOficial2';
import NavBar2 from '../../Bases/NavBar2';
import ProfilePhoto from '../../Bases/profileFoto';
import Inicio from '../../Pages/empresa/InicioFreelancer';
import Portfolio from '../../Pages/empresa/Portfolio';
import Projetos from '../../Pages/empresa/ProjetosHistorico';
import EmptyStar from '../../img/estrelavaziaAzul.png';
import FullStar from '../../img/estrelaCheiaAzul.png';

const StarRating = ({ rating }) => {
    const maxStars = 5;

    // Garantir que rating esteja dentro do intervalo de 0 a 5
    const validRating = Math.min(Math.max(parseInt(rating, 10), 0), maxStars);

    return (
        <div className={style.stars}>
            {Array.from({ length: maxStars }).map((_, index) => (
                <span key={index}>
                    {index < validRating ? (
                        <img className={style.star} src={FullStar} alt="Star Full" />
                    ) : (
                        <img className={style.star} src={EmptyStar} alt="Star Empty" />
                    )}
                </span>
            ))}
        </div>
    );
};

const calculateAverageRating = (avaliacao) => {
    if (!avaliacao || avaliacao.length === 0) return 0; // Retorna 0 caso não haja avaliações
    const totalStars = avaliacao.reduce((sum, a) => sum + a.estrelas, 0); // Soma das estrelas
    const averageRating = totalStars / avaliacao.length; // Média das estrelas
    return Math.round(averageRating); // Arredonda para o número inteiro mais próximo
};

const EmpresaDetails = () => {
    const { id } = useParams();
    console.log(id);
    
    const [empresa, setEmpresa] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const [currentScreen, setCurrentScreen] = useState(1);

    useEffect(() => {
        const fetchEmpresaDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/v1/jinni/cliente/${id}`);
                if (!response.ok) throw new Error("Erro ao buscar dados");
                const data = await response.json();
                setEmpresa(data);
            } catch (err) {
                setError('Erro ao carregar os dados do usuario');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEmpresaDetails();
    }, [id]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;
    if (!empresa) return <div>empresa  não encontrado.</div>;

    const changeScreen = (screen, event) => {
        document.querySelectorAll(`.${style.selecionado}`).forEach(el => el.classList.remove(style.selecionado));
        event.currentTarget.classList.add(style.selecionado);
        setCurrentScreen(screen);
    };
    const averageRating = Math.round(calculateAverageRating(empresa.cliente && empresa.cliente.length > 0
        ? empresa.cliente[0].avaliacao
        : "Not found"));

    return (
        <div className={style.telas}>
            <HeaderOficial />
            <div className={style.navegacao}>
                <NavBar2 />
                <div className={style.perfil}>
                    <ProfilePhoto empresa={empresa} />
                    <h1>{empresa.cliente && empresa.cliente.length > 0
                        ? empresa.cliente[0].nome_cliente
                        : "Not found"}</h1>
                            <StarRating rating={averageRating} />

                    <p className={style.descricao}>{empresa.cliente && empresa.cliente.length > 0
                        ? empresa.cliente[0].descricao_cliente
                        : "Not found"}</p>
                    

                </div>

                <div className={style.detalhe}>
                    <ul className={style.navigate}>
                        <li onClick={(e) => changeScreen(1, e)} className={`${style.selecionado}`}>Início</li>
                        <li onClick={(e) => changeScreen(2, e)}>Portfólio</li>
                    </ul>
                    <div>
                        {currentScreen === 1 && <Inicio style={style} empresa={empresa.cliente[0]}/>}
                        {currentScreen === 2 && <Portfolio style={style} key={empresa.id} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmpresaDetails;
