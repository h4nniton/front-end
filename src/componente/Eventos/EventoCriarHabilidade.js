import React, { useEffect, useState } from 'react';
import { getHabilidade } from '../integração/funcao.js'
import styles from '../Css/card.module.css'

const EventosCriarCard = ({ habilidade }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleCardClick = () => {
        setIsSelected(!isSelected); 
      };

    return (
        <div className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}
        onClick={handleCardClick}>

            <img src={habilidade.icon_habilidade} alt={habilidade.nome_habilidade} className={styles.img} />
            <p>{habilidade.nome_habilidade}</p>

        </div>
    );
};

const App = () => {
    const [habilidades, setHabilidades] = useState([]);

    useEffect(() => {
        const fetchHabilidade = async () => {
            const data = await getHabilidade();
            setHabilidades(data.habilidades);
        };

        fetchHabilidade();
    }, []);

    return (
        <div id="categorias" className={styles.body}>
            {habilidades.map((habilidade) => (
                <EventosCriarCard key={habilidade.id} habilidade={habilidade} />
            ))}
        </div>
    );
};

export default App;