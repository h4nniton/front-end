import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';



const Avaliacoes = () => {
    const { id } = useParams();

  const [avaliacoes, setAvaliacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar os dados
    const fetchAvaliacoes = async () => {
      try {
        const response = await fetch(`http://localhost:8080/v1/jinni/freelancer/${id}`); // Substitua pela sua URL de API
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        setAvaliacoes(data); // Atualiza o estado com os dados recebidos
      } catch (err) {
        setError(err.message); // Captura erros
      } finally {
        setLoading(false); // Remove o estado de carregamento
      }
    };

    fetchAvaliacoes(); // Chama a função
  }, []); // O array vazio garante que o useEffect rode apenas na montagem do componente

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h2>Avaliações</h2>
      {avaliacoes.length > 0 ? (
        <ul>
          {avaliacoes.map((avaliacao) => (
            <li key={avaliacao.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
              <h3>{avaliacao[0].nome_avaliador} </h3>
              <p>Estrelas: {avaliacao[0].estrelas} ⭐</p>
              
              <p>Comentário: {avaliacao[0].comentario}</p>
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
