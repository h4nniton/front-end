import React, { useEffect, useState } from 'react';
import styles from '../Css/PerfilCriacao.module.css';
import img from '../img/Logo.png';
import { useNavigate } from 'react-router-dom';

const PerfilHabilidade = () => {
    const navigate = useNavigate();
    const [habilidades, setHabilidades] = useState([]); // Lista de habilidades do GET
    const [selectedIds, setSelectedIds] = useState([]); // IDs das habilidades selecionadas
    const idFreelancer = 2; // Substitua pelo ID real do freelancer

    // Fetch habilidades ao carregar a página
    useEffect(() => {
        const fetchHabilidades = async () => {
            try {
                const response = await fetch('http://localhost:8080/v1/jinni/habilidades'); // GET habilidades
                const data = await response.json();
                setHabilidades(data.habilidades || []); // Garante que habilidades seja um array
            } catch (error) {
                console.error('Erro ao buscar habilidades:', error);
                alert('Não foi possível carregar as habilidades. Tente novamente mais tarde.');
            }
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
            navigate('/proximaPagina'); // Redireciona para a próxima página
        } catch (error) {
            console.error('Erro ao enviar habilidades:', error);
            alert('Ocorreu um erro ao enviar as habilidades.');
        }
    };

    // Função chamada ao clicar no botão "Continuar"
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
            <p className={styles.p}>Selecione as habilidades nas quais você trabalha</p>

            {/* Exibição dos cards de habilidades */}
            <div id="habilidades" className={styles.section}>
                {habilidades.map((habilidade) => (
                    <div
                        key={habilidade.id}
                        className={`${styles.card} ${selectedIds.includes(habilidade.id) ? styles.cardSelected : ''}`}
                        onClick={() => handleCardClick(habilidade.id)}
                    >
                        <img
                            src={habilidade.icon_habilidade || '/default-icon.png'} // Ícone da habilidade ou ícone padrão
                            alt={habilidade.nome_habilidade}
                            className={styles.img}
                        />
                        <p>{habilidade.nome_habilidade}</p>
                    </div>
                ))}
            </div>

            {/* Botão para enviar habilidades */}
            <button className={styles.botao} onClick={handleClick}>
                Continuar
            </button>
        </div>
    );
};

export default PerfilHabilidade;
