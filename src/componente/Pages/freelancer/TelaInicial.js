import HeaderOficial from '../../Bases/HeaderOficial.js';
import NavBar from '../../Bases/NavBar.js';
import style from '../../Css/telaInicial2.module.css';
import ProfilePhoto from '../../Bases/profileFoto.js';
import { getProjetos } from '../../integração/funcao.js';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Usuarios = () => {
    const [projetos, setProjetos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjetos = async () => {
            try {
                const proposta = await getProjetos();
                if (proposta && Array.isArray(proposta.projetos)) {
                    setProjetos(proposta.projetos);
                } else {
                    throw new Error('Dados de projetos inválidos.');
                }
            } catch (err) {
                setError('Erro ao carregar Projetos.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjetos();
    }, []);

    const handleFreelancerClick = (freelancer) => {
        // Exibir SweetAlert com detalhes do freelancer
        Swal.fire({
            title: freelancer.nome_freelancer,
            html: `
                <p><strong>Descrição:</strong> ${freelancer.descricao || 'Descrição não informada'}</p>
                <p><strong>Habilidade:</strong> ${
                    freelancer.habilidades && freelancer.habilidades.length > 0
                        ? freelancer.habilidades[0].nome_habilidade
                        : 'Não informado'
                }</p>
            `,
            imageUrl: freelancer.habilidades && freelancer.habilidades.length > 0
                ? freelancer.habilidades[0].icon_habilidade
                : null,
            imageWidth: 100,
            imageHeight: 100,
            confirmButtonText: 'Fechar',
        });
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const idEmp = localStorage.getItem('id');
    console.log('ID recuperado no Usuarios:', idEmp);

    return (
        <div className={style.telas}>
            <HeaderOficial id={idEmp} />
            <div className={style.navegacao}>
                <NavBar />
                <div className={style.feed}>
                    <div className={style.pi}>
                        {projetos.length > 0 ? (
                            projetos.map((projeto) => {
                                return (
                                    <div
                                        key={projeto.id}
                                        className={style.card}
                                        onClick={() => handleFreelancerClick(projeto)} // Chama a função ao clicar no card
                                    >
                                        <div className={style.infoPerfil}>
                                            <ProfilePhoto projeto={projeto} />
                                            <div className={style.a}>
                                                <h2>{projeto.nome_projeto}</h2>
                                            </div>
                                        </div>
                                        <p className={style.p}>
                                            {projeto.descricao
                                                ? projeto.descricao
                                                : 'Descrição não informada'}
                                        </p>
                                        <div className={style.habilidade}>
                                            <img
                                                src={
                                                    projeto.habilidades &&
                                                    projeto.habilidades.length > 0
                                                        ? projeto.habilidades[0].icon_habilidade
                                                        : 'not found'
                                                }
                                                alt="Habilidade"
                                            />
                                            <p>
                                                {projeto.habilidades &&
                                                projeto.habilidades.length > 0
                                                    ? projeto.habilidades[0].nome_habilidade
                                                    : 'Não informado'}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div>
                                <h2>Nenhum projeto encontrado.</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Usuarios;
