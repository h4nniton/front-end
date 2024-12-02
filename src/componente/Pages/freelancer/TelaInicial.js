import HeaderOficial from '../../Bases/HeaderOficial.js';
import NavBar from '../../Bases/NavBar.js';
import style from '../../Css/telaInicial2.module.css';
import ProfilePhoto from '../../Bases/profileFoto.js';
import { getProjetos } from '../../integração/funcao.js';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import loading from '../../img/carregando.gif'

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
            title: `<h2 style="font-size: 24px; color: #1a202c; margin-bottom: 10px;">${freelancer.nome_freelancer}</h2>`,
            html: `
                <p style="font-size: 14px; color: #6b7280; margin-bottom: 20px;">
                    ${freelancer.descricao || 'Descrição não informada'}
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
                    ${freelancer.habilidades && freelancer.habilidades.length > 0
                        ? freelancer.habilidades
                              .map(
                                  (habilidade) => `
                                  <div style="
                                      display: flex;
                                      align-items: center;
                                      gap: 8px;
                                      padding: 8px 12px;
                                      border: 1px solid #e5e7eb;
                                      border-radius: 8px;
                                      font-size: 14px;
                                      color: #374151;
                                      background-color: #f9fafb;">
                                      <img src="${habilidade.icon_habilidade}" 
                                           alt="${habilidade.nome_habilidade}" 
                                           style="width: 20px; height: 20px; border-radius: 50%;">
                                      <span>${habilidade.nome_habilidade}</span>
                                  </div>`
                              )
                              .join("")
                        : '<p style="color: #9ca3af;">Habilidades não informadas</p>'}
                </div>
            `,
            imageUrl: freelancer.habilidades && freelancer.habilidades.length > 0
                ? freelancer.habilidades[0].icon_habilidade
                : null,
            imageWidth: 60,
            imageHeight: 60,
            showCloseButton: true,
            confirmButtonText: '<span style="font-size: 14px; padding: 5px 10px;">Fechar</span>',
            customClass: {
                popup: 'custom-popup',
            },
            width: '600px',
            padding: '20px',
            background: '#ffffff',
        });        
    };

    if (loading) {
        return <div className={style.loading}>
            <img src={loading}></img>
            Carregando...</div>;
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
