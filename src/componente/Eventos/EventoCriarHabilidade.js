import React, { useEffect, useState } from 'react';
import { getHabilidade } from '../integração/funcao.js';
import styles from '../Css/card.module.css';

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

const App = () => {
    const [habilidades, setHabilidades] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const idFreelancer = 2; // Id do usuário

    // Fetch habilidades
    useEffect(() => {
        const fetchHabilidade = async () => {
            const data = await getHabilidade();
            setHabilidades(data.habilidades);
        };

        fetchHabilidade();
    }, []);

    // Gerencia seleção de habilidades
    const handleCardClick = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Envia habilidades selecionadas ao backend
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
        } catch (error) {
            console.error('Erro ao enviar habilidades:', error);
            alert('Ocorreu um erro ao enviar as habilidades.');
        }
    };

    return (
        <div id="categorias" className={styles.body}>
            {habilidades.map((habilidade) => (
                <EventosCriarCard
                    key={habilidade.id}
                    habilidade={habilidade}
                    isSelected={selectedIds.includes(habilidade.id)}
                    onCardClick={handleCardClick}
                />
            ))}
            <button
                className={styles.submitButton}
                onClick={sendSelectedHabilidades}
                disabled={selectedIds.length === 0}
            >
                Enviar Habilidades
            </button>
        </div>
    );
};

export default App;
