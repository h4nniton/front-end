import React, { useEffect, useState } from 'react';
import { getCategoria } from '../integração/funcao.js'
import styles from '../Css/card.module.css'

const EventosCriarCard = ({ categoria, array }) => {
    const [isSelected, setIsSelected] = useState(false);
    
    const handleCardClick = () => {
        setIsSelected(!isSelected); // Alterna o estado entre true e false

        if (!isSelected) {
            // Se não estava selecionado, adiciona o id
            array.push(categoria.id);
        } else {
            // Se estava selecionado, remove o id
            const index = array.indexOf(categoria.id);
            if (index > -1) {
                array.splice(index, 1); // Remove o id do array
            }
        }        
        
    };

    return (
        <div className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`} // Aplica a classe 'cardSelected' se 'isSelected' for true
        onClick={handleCardClick}>

            <img src={categoria.icon_categoria} alt={categoria.nome_categoria} className={styles.img} />
            <p>{categoria.nome_categoria}</p>

        </div>
    );
};



const App = ({array}) => {
    
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
                <EventosCriarCard key={categoria.id} categoria={categoria} array={array} />
            ))}
        </div>
    );
};

export default App;