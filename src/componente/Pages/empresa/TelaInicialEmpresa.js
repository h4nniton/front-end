import HeaderOficial2 from '../../Bases/HeaderOficial2.js';
import NavBar from '../../Bases/NavBar2.js';
import style from '../../Css/telaInicial2.module.css';
import ProfilePhoto from '../../Bases/profileFoto.js';
import { getFreelancers } from '../../integração/funcao.js';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import EmptyStar from '../../img/estrelaVaziaBranca.png';
import FullStar from '../../img/estralaCheiaBranca.png';



// Componente para exibir estrelas
const StarRating = ({ rating }) => {
    const maxStars = 5;
    return (
        <div className={style.stars}>
            {Array.from({ length: maxStars }).map((_, index) => (
                <span key={index}>
                    {index < rating ? (
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
    if (!avaliacao || avaliacao.length === 0) return 0;
    const totalStars = avaliacao.reduce((sum, a) => sum + a.estrelas, 0);
    return totalStars / avaliacao.length;
};

const Usuarios = () => {
    const location = useLocation();
    const id = localStorage.getItem("id")
    const { idEmp } = location.state || {};
    const [freelancers, setFreelancers] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controle de carregamento
    const [error, setError] = useState(null); // Estado para mensagens de erro

    useEffect(() => {
        const fetchFreelancers = async () => {
            try {
                const usuarios = await getFreelancers();
                if (usuarios && Array.isArray(usuarios.freelancers)) {
                    setFreelancers(usuarios.freelancers);
                } else {
                    throw new Error('Dados de freelancers inválidos.');
                }
            } catch (err) {
                setError('Erro ao carregar freelancers.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        // Inicia o carregamento dos dados
        fetchFreelancers();
    }, []);

    if (loading) {
        return <div>Carregando...</div>; // Exibe uma mensagem enquanto os dados estão sendo carregados
    }

    if (error) {
        return <div>{error}</div>; // Exibe mensagem de erro, se ocorrer
    }

 
    return (
        <div className={style.telas}>
            <HeaderOficial2 id = {id} />
            <div className={style.navegacao}>
                <NavBar />
                <div className={style.feed}>
                    <div className={style.pi}>
                        {freelancers.length > 0 ? (
                            freelancers.map((freelancer) => {
                                const averageRating = Math.round(calculateAverageRating(freelancer.avaliacao));
                                return (
                                    <div key={freelancer.id} className={style.card}>
                                        <Link to={`/freelancer/${freelancer.id}`} className={style.link}>
                                            <div className={style.infoPerfil}>
                                                <ProfilePhoto freelancer={freelancer} />

                                                <div className={style.a}>
                                                    <h2>{freelancer.nome_freelancer}</h2>
                                                    <StarRating rating={averageRating} />
                                                </div>
                                            </div>
                                            <p className={style.p}>
                                                {freelancer.descricao
                                                    ? freelancer.descricao
                                                    : 'Descrição não informada'}
                                            </p>
                                            <div className={style.habilidade}>
                                                <img
                                                    src={
                                                        freelancer.habilidades &&
                                                        freelancer.habilidades.length > 0
                                                            ? freelancer.habilidades[0].icon_habilidade
                                                            : 'not found'
                                                    }
                                                    alt="Habilidade"
                                                />
                                                <p>
                                                    {freelancer.habilidades &&
                                                    freelancer.habilidades.length > 0
                                                        ? freelancer.habilidades[0].nome_habilidade
                                                        : 'not found'}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        ) : (
                            <div>
                                <h2>Nenhum freelancer encontrado.</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usuarios;
