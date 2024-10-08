import React, { useEffect, useState } from 'react';
import { getCategoria } from '../integração/funcao.js'
import styles from '../Css/card.module.css'

const EventosCriarCard = ({ categoria }) => {
    console.log(categoria);

    return (
        <div className={styles.card}>

            <img src={categoria.icon_categoria} alt={categoria.nome_categoria} className={styles.img} />
            <p>{categoria.nome_categoria}</p>

        </div>
    );
};

const App = () => {
    const [categorias, setCategorias] = useState([]);

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
                <EventosCriarCard key={categoria.id} categoria={categoria} />
            ))}
        </div>
    );
};

export default App;