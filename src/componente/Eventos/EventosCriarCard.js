import React, { useEffect, useState } from 'react';
import { getCategoria } from '../integração/funcao.js';
import styles from '../Css/card.module.css';
import { useNavigate } from 'react-router-dom'; // Para navegação entre telas

const EventosCriarCard = ({ categoria, isSelected, onCardClick }) => {
    return (
        <div
            className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}
            onClick={() => onCardClick(categoria.id)}
        >
            <img
                src={categoria.icon_categoria}
                alt={categoria.nome_categoria}
                className={styles.img}
            />
            <p>{categoria.nome_categoria}</p>
        </div>
    );
};

const App = () => {
    const [categorias, setCategorias] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const idFreelancer = 1; // Substitua pelo ID do usuário real
    const navigate = useNavigate();

    // Fetch categorias
    useEffect(() => {
        const fetchCategorias = async () => {
            const data = await getCategoria();
            setCategorias(data.categorias);
        };

        fetchCategorias();
    }, []);

    // Gerencia a seleção de categorias
    const handleCardClick = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Envia categorias selecionadas ao backend
    const sendSelectedCategorias = async () => {
        try {
            const responses = await Promise.all(
                selectedIds.map(async (idCategoria) => {
                    const response = await fetch('http://localhost:8080/v1/jinni/categoria/freelancer', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id_freelancer: idFreelancer,
                            id_categoria: idCategoria,
                        }),
                    });
                    return response.json();
                })
            );
            console.log('Resposta do servidor:', responses);
            alert('Categorias enviadas com sucesso!');
            navigate('/habilidades'); // Navega para a tela de habilidades
        } catch (error) {
            console.error('Erro ao enviar categorias:', error);
            alert('Ocorreu um erro ao enviar as categorias.');
        }
    };

    return (
        <div id="categorias" className={styles.body}>
            {categorias.map((categoria) => (
                <EventosCriarCard
                    key={categoria.id}
                    categoria={categoria}
                    isSelected={selectedIds.includes(categoria.id)}
                    onCardClick={handleCardClick}
                />
            ))}
            <button
                className={styles.submitButton}
                onClick={sendSelectedCategorias}
                disabled={selectedIds.length === 0}
            >
                Continuar para Habilidades
            </button>
        </div>
    );
};

export default App;
