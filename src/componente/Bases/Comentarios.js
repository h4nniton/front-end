import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Css/Comentarios.module.css'
import star from '../img/estrelaCheiaAzul.png'

const Avaliacoes = () => {
  const { id } = useParams();
  const [avaliacoes, setAvaliacoes] = useState([]); // Estado para armazenar avaliações
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  useEffect(() => {
    // Função para buscar os dados
    const fetchAvaliacoes = async () => {
      try {
        const response = await fetch(`http://localhost:8080/v1/jinni/freelancer/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();

        // Verifica se o retorno da API contém freelancers com avaliações
        if (data.freelancers && data.freelancers.length > 0 && data.freelancers[0].avaliacao) {
          setAvaliacoes(data.freelancers[0].avaliacao); // Atualiza o estado com as avaliações
        } else {
          setAvaliacoes([]); // Define como vazio se não houver avaliações
        }
      } catch (err) {
        setError(err.message); // Captura erros
      } finally {
        setLoading(false); // Remove o estado de carregamento
      }
    };

    fetchAvaliacoes(); // Chama a função
  }, [id]); // Reexecuta o efeito quando o ID mudar

  // Renderização condicional para estados de carregamento e erro
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (

    <div>
      {avaliacoes.length > 0 ? (
        <div className={styles.comentarios}>
          {avaliacoes.map((avaliacao) => (
            <div
              key={avaliacao.id}
              className={styles.card}
            >
              <div className={styles.info}>
                <h3 > {avaliacao.nome_avaliador}</h3> {/* Nome do avaliador */}
                <p>
                  {Array.from({ length: avaliacao.estrelas }).map((_, index) => (
                    <img key={index} src={star} className={styles.estrela} />
                  ))}
                </p>
              </div>

              <p>{avaliacao.comentario}</p> {/* Comentário */}
            </div>
          ))}
        </div>
      ) : (
        <p>Sem avaliações disponíveis.</p>
      )}
    </div>
  );
};

export default Avaliacoes;
