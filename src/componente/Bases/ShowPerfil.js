import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from '../Css/perfilFreelancer.module.css';
import HeaderOficial from '../Bases/HeaderOficial2';
import NavBar2 from '../Bases/NavBar2';
import ProfilePhoto from '../Bases/profileFoto';
import Inicio from '../Pages/empresa/InicioFreelancer';
import Portfolio from '../Pages/empresa/Portfolio';
import Projetos from '../Pages/empresa/ProjetosHistorico';
import EmptyStar from '../img/estrelavaziaAzul.png';
import FullStar from '../img/estrelaCheiaAzul.png';

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

const FreelancerDetails = () => {
    const { id } = useParams();
    console.log(id);
    
    const [freelancer, setFreelancer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const [currentScreen, setCurrentScreen] = useState(1);

    useEffect(() => {
        const fetchFreelancerDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/v1/jinni/freelancer/${id}`);
                if (!response.ok) throw new Error("Erro ao buscar dados");
                const data = await response.json();
                setFreelancer(data);
            } catch (err) {
                setError('Erro ao carregar os dados do freelancer');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchFreelancerDetails();
    }, [id]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;
    if (!freelancer) return <div>Freelancer não encontrado.</div>;

    const changeScreen = (screen, event) => {
        document.querySelectorAll(`.${style.selecionado}`).forEach(el => el.classList.remove(style.selecionado));
        event.currentTarget.classList.add(style.selecionado);
        setCurrentScreen(screen);
    };
    const averageRating = Math.round(calculateAverageRating(freelancer.avaliacao));

    return (
        <div className={style.telas}>
            <HeaderOficial />
            <div className={style.navegacao}>
                <NavBar2 />
                <div className={style.perfil}>
                    <ProfilePhoto freelancer={freelancer} />
                    <h1>{freelancer.freelancers && freelancer.freelancers.length > 0
                        ? freelancer.freelancers[0].nome_freelancer
                        : "Not found"}</h1>
                    <StarRating rating={averageRating} />

                    <p className={style.descricao}>{freelancer.freelancers && freelancer.freelancers.length > 0
                        ? freelancer.freelancers[0].descricao
                        : "Not found"}</p>
                    <button
                        className={style.botao}
                        onClick={() => navigate('/Mensagens')}
                    >
                        Enviar Proposta Particular
                    </button>

                    <p>Categorias</p>
                    <div className={style.card}>
                        <img src={freelancer.freelancers && freelancer.freelancers.length > 0
                            ? freelancer.freelancers[0].categorias[0].icon_categoria
                            : "Not found"} />


                        <p>
                            {freelancer.freelancers && freelancer.freelancers.length > 0
                                ? freelancer.freelancers[0].categorias[0].nome_categoria
                                : "Not found"}
                        </p>
                    </div>

                    <p>Habilidades</p>
                    <div className={style.card}>
                        <img src={freelancer.freelancers && freelancer.freelancers.length > 0
                            ? freelancer.freelancers[0].habilidades[0].icon_habilidade
                            : "Not found"} />


                        <p>
                            {freelancer.freelancers && freelancer.freelancers.length > 0
                                ? freelancer.freelancers[0].habilidades[0].nome_habilidade
                                : "Not found"}
                        </p>
                    </div>
                </div>

                <div className={style.detalhe}>
                    <ul className={style.navigate}>
                        <li onClick={(e) => changeScreen(1, e)} className={`${style.selecionado}`}>Início</li>
                        <li onClick={(e) => changeScreen(2, e)}>Portfólio</li>
                        <li onClick={(e) => changeScreen(3, e)}>Projetos</li>
                    </ul>
                    <div>
                        {currentScreen === 1 && <Inicio style={style} key={freelancer.id} />}
                        {currentScreen === 2 && <Portfolio style={style} key={freelancer.id} />}
                        {currentScreen === 3 && <Projetos style={style} key={freelancer.id} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreelancerDetails;
