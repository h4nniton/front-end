import React, { useState, useEffect } from 'react';
import styles from '../Css/PerfilCriacao.module.css';
import img from '../img/Logo.png';
import { useNavigate } from 'react-router-dom';

const PerfilCriacao = () => {
    const navigate = useNavigate();
    const [categorias, setCategorias] = useState([]); // Dados de categorias do GET
    const [selectedIds, setSelectedIds] = useState([]); // IDs selecionados
    const idFreelancer = 1; // ID do freelancer (ajuste conforme necessário)

    // Fetch categorias ao carregar a página
    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await fetch('https://jinni.onrender.com/v1/jinni/clientes'); // GET categorias
                const data = await response.json();
                setCategorias(data.categorias || []); // Garante que categorias seja um array
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
                alert('Não foi possível carregar as categorias. Tente novamente mais tarde.');
            }
        };
        fetchCategorias();
    }, []);

    // Gerencia a seleção de categorias
    const handleCardClick = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Envia as categorias selecionadas para o backend
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
            navigate('/PerfilHabilidade'); // Navega para a próxima tela
        } catch (error) {
            console.error('Erro ao enviar categorias:', error);
            alert('Ocorreu um erro ao enviar as categorias.');
        }
    };

    // Função chamada ao clicar em "Continuar"
    const handleClick = () => {
        if (selectedIds.length > 0) {
            sendSelectedCategorias();
        } else {
            alert('Por favor, selecione ao menos uma categoria!');
        }
    };

    // Componente para exibir cada card de categoria
    const CategoriaCard = ({ categoria, isSelected, onCardClick }) => {
        const handleClick = () => {
            onCardClick(categoria.id); // Seleciona ou desmarca o card
        };

        return (
            <div
                className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}
                onClick={handleClick}
            >
                <img
                    src={categoria.icon_categoria || '/default-icon.png'} // Ícone da categoria ou ícone padrão
                    alt={categoria.nome_categoria}
                    className={styles.icon}
                />
                <p>{categoria.nome_categoria}</p>
            </div>
        );
    };

    return (
        <div>
            {/* Header com o logo */}
            <div className={styles.header}>
                <img src={img} alt="Logo" onClick={() => navigate('/')} />
            </div>

            <h1>Selecione suas categorias</h1>
            <p className={styles.p}>Selecione as áreas nas quais você trabalha</p>

            {/* Exibição dos cards de categorias */}
            <div id="categorias" className={styles.section}>
                {categorias.map((categoria) => (
                    <CategoriaCard
                        key={categoria.id}
                        categoria={categoria}
                        isSelected={selectedIds.includes(categoria.id)}
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>

            {/* Botão para continuar */}
            <button className={styles.botao} onClick={handleClick}>
                Continuar
            </button>
        </div>
    );
};

export default PerfilCriacao;
