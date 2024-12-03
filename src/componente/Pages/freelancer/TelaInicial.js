import HeaderOficial from '../../Bases/HeaderOficial.js';
import NavBar from '../../Bases/NavBar.js';
import style from '../../Css/telaInicial2.module.css';
import ProfilePhoto from '../../Bases/profileFoto.js';
import { getProjetos } from '../../integração/funcao.js';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import loadingImg from '../../img/carregando.gif';

Modal.setAppElement('#root'); // Configuração de acessibilidade do React Modal

const Usuarios = () => {
    const navigate = useNavigate();
    const [projetos, setProjetos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProjeto, setSelectedProjeto] = useState(null);

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
                setIsLoading(false);
            }
        };

        fetchProjetos();
    }, []);

    const openModal = (projeto) => {
        setSelectedProjeto(projeto);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProjeto(null);
        setIsModalOpen(false);
    };

    if (isLoading) {
        return (
            <div className={style.loading}>
                <img src={loadingImg} alt="Carregando" />
                Carregando...
            </div>
        );
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
                            projetos.map((projeto) => (
                                <div
                                    key={projeto.id}
                                    className={style.card}
                                    onClick={() => openModal(projeto)}
                                >
                                    <div className={style.infoPerfil}>
                                        <ProfilePhoto projeto={projeto} />
                                        <div className={style.a}>
                                            <h2>{projeto.nome_projeto}</h2>
                                        </div>
                                    </div>
                                    <p className={style.p}>
                                        {projeto.descricao || 'Descrição não informada'}
                                    </p>
                                    <div className={style.habilidade}>
                                        <img
                                            src={
                                                projeto.habilidades?.[0]?.icon_habilidade || 'not found'
                                            }
                                            alt="Habilidade"
                                        />
                                        <p>
                                            {projeto.habilidades?.[0]?.nome_habilidade || 'Não informado'}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>
                                <h2>Nenhum projeto encontrado.</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {selectedProjeto && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    className={style.modal}
                    overlayClassName={style.overlay}
                >
                    <div className={style.modalContent}>
                    <h2>{selectedProjeto.nome_cliente || 'Nome não informado'}</h2>
                        <h2>{selectedProjeto.nome_projeto || 'Nome não informado'}</h2>
                        <p>{selectedProjeto.descricao || 'Descrição não informada'}</p>
                        <div className={style.modalDetails}>
                            <div>
                                <strong>Categorias:</strong>{' '}
                                {(selectedProjeto.categorias || []).join(', ') || 'Não informado'}
                            </div>
                            <div>
                                <strong>Habilidades:</strong>{' '}
                                {(selectedProjeto.habilidades || [])
                                    .map((habilidade) => habilidade.nome_habilidade)
                                    .join(', ') || 'Não informado'}
                            </div>
                            <div>
                                <strong>Data limite:</strong>{' '}
                                {selectedProjeto.data_limite || 'Não informado'}
                            </div>
                            <div>
                                <strong>Pagamento:</strong>{' '}
                                {selectedProjeto.pagamento
                                    ? `R$ ${selectedProjeto.pagamento}`
                                    : 'Não informado'}
                            </div>
                        </div>
                        <button className={style.negociarButton}>
                            Negociar
                        </button>
                        <button className={style.negociarButton} onClick={closeModal}>
                            fechar
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Usuarios;
