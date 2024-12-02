import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Avaliacoes = () => {
  const { id } = useParams();
  const [avaliacoes, setAvaliacoes] = useState([]); // Estado para armazenar avaliações
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  useEffect(() => {
    // Função para buscar os dados
    const fetchAvaliacoes = async () => {
      try {
        const response = await fetch(`http://localhost:8080/v1/jinni/cliente/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();

        // Verifica se o retorno da API contém o array de avaliações
        if (data.avaliacao) {
          setAvaliacoes(data.avaliacao); // Atualiza o estado com as avaliações
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
      <h2>Avaliações</h2>
      {avaliacoes.length > 0 ? (
        <ul>
          {avaliacoes.map((avaliacao) => (
            <li
              key={avaliacao.id}
              style={{
                border: '1px solid #ddd',
                margin: '10px',
                padding: '10px',
              }}
            >
              <h3>{avaliacao.nome_avaliador}</h3> {/* Nome do avaliador */}
              <p>Estrelas: {avaliacao.estrelas} ⭐</p> {/* Número de estrelas */}
              <p>Comentário: {avaliacao.comentario}</p> {/* Comentário */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Sem avaliações disponíveis.</p>
      )}
    </div>
  );
};

export default Avaliacoes;
