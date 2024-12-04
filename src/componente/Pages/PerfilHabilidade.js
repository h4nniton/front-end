import React, { useEffect, useState } from 'react';
import styles from '../Css/PerfilCriacao.module.css';
import img from '../img/Logo.png';
import { useNavigate } from 'react-router-dom';
import { getHabilidade } from '../integração/funcao.js'; // Função para buscar habilidades

const EventosCriarCard = ({ habilidade, isSelected, onCardClick }) => {
    return (
        <div
            className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}
            onClick={() => onCardClick(habilidade.id)}
        >
            <img
                src={habilidade.icon_habilidade}
                alt={habilidade.nome_habilidade}
                className={styles.img}
            />
            <p>{habilidade.nome_habilidade}</p>
        </div>
    );
};

function PerfilHabilidade() {
    const navigate = useNavigate();
    const [habilidades, setHabilidades] = useState([]); // Lista de habilidades
    const [selectedIds, setSelectedIds] = useState([]); // IDs das habilidades selecionadas
    const idFreelancer = 2; // Substitua pelo ID do freelancer real

    // Fetch habilidades ao carregar a página
    useEffect(() => {
        const fetchHabilidades = async () => {
            const data = await getHabilidade();
            setHabilidades(data.habilidades || []); // Garante que habilidades seja um array
        };
        fetchHabilidades();
    }, []);

    // Gerencia a seleção de habilidades
    const handleCardClick = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Envia as habilidades selecionadas para o backend
    const sendSelectedHabilidades = async () => {
        try {
            const responses = await Promise.all(
                selectedIds.map(async (idHabilidade) => {
                    const response = await fetch('http://localhost:8080/v1/jinni/habilidade/freelancer', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id_freelancer: idFreelancer,
                            id_habilidade: idHabilidade,
                        }),
                    });
                    return response.json();
                })
            );
            console.log('Resposta do servidor:', responses);
            alert('Habilidades enviadas com sucesso!');
            navigate('/FimCadastro'); // Navega para a próxima tela
        } catch (error) {
            console.error('Erro ao enviar habilidades:', error);
            alert('Ocorreu um erro ao enviar as habilidades.');
        }
    };

    // Função chamada ao clicar no botão "Criar Conta"
    const handleClick = () => {
        if (selectedIds.length > 0) {
            sendSelectedHabilidades();
        } else {
            alert('Por favor, selecione ao menos uma habilidade!');
        }
    };

    return (
        <div>
            {/* Header com o logo */}
            <div className={styles.header}>
                <img src={img} alt="Logo" onClick={() => navigate('/')} />
            </div>

            <h1>Selecione suas habilidades</h1>
            <p className={styles.p}>Selecione as habilidades das quais você possui o conhecimento</p>

            {/* Exibição dos cards de habilidades */}
            <div id="habilidades" className={styles.section}>
                {habilidades.map((habilidade) => (
                    <EventosCriarCard
                        key={habilidade.id}
                        habilidade={habilidade}
                        isSelected={selectedIds.includes(habilidade.id)}
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>

            {/* Botão para enviar habilidades */}
            <button className={styles.botao} onClick={handleClick}>
                Criar Conta
            </button>
        </div>
    );
}

export default PerfilHabilidade;
