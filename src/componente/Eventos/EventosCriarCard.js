import React, { useEffect, useState } from 'react';
import { getCategoria } from '../integração/funcao.js';
import styles from '../Css/card.module.css';
import { useNavigate } from 'react-router-dom'; // Para navegação entre telas

const App = ({ selectedIds, onCardClick }) => {
    const [categorias, setCategorias] = useState([]);

    // Fetch categorias
    useEffect(() => {
        const fetchCategorias = async () => {
            const data = await getCategoria();
            setCategorias(data.categorias);
        };

        fetchCategorias();
    }, []);

    return (
        <div id="categorias" className={styles.body}>
            {categorias.map((categoria) => (
                <EventosCriarCard
                    key={categoria.id}
                    categoria={categoria}
                    isSelected={selectedIds.includes(categoria.id)}
                    onCardClick={onCardClick}
                />
            ))}
        </div>
    );
};

export default App;
