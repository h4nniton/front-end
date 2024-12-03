import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../../Css/perfilEmpresa.module.css';
import HeaderOficial2 from '../../Bases/HeaderOficial2.js';
import NavBar2 from '../../Bases/NavBar2.js';
import estrelas from '../../img/avaliacao.png';
import ProfilePhoto from '../../Bases/profileFoto';
import Inicio from './inicioEmpresa.js';
import Portfolio from './PortfolioEmpresa.js';
import edit from "../../img/lapis.png";

const EmpresaDetails = () => {
  const { id } = useParams();
  const [empresa, setEmpresa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isEditing, setIsEditing] = useState(false); // Estado para controle de edição
  const [updatedName, setUpdatedName] = useState(''); // Estado para atualizar o nome
  const [updatedDescription, setUpdatedDescription] = useState(''); // Estado para atualizar a descrição
  const [isSaving, setIsSaving] = useState(false); // Para indicar se os dados estão sendo salvos

  // Função para mudar a tela selecionada
  const changeScreen = (screen, event) => {
    document.querySelectorAll(`.${style.selecionado}`).forEach(el => el.classList.remove(style.selecionado));
    event.currentTarget.classList.add(style.selecionado);
    setCurrentScreen(screen);
  };

  useEffect(() => {
    if (id) {
      fetchEmpresaDetails(id);
    } else {
      setError('ID não encontrado');
      setLoading(false);
    }
  }, [id]);

  const fetchEmpresaDetails = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/v1/jinni/cliente/${id}`);
      if (!response.ok) throw new Error("Erro ao buscar dados");
      const data = await response.json();
      setEmpresa(data);
      setUpdatedName(data.cliente[0].nome_cliente); // Inicializa o campo de nome com o valor atual
      setUpdatedDescription(data.cliente[0].descricao_cliente); // Inicializa o campo de descrição com o valor atual
    } catch (err) {
      setError('Erro ao carregar os dados da empresa');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing); // Alterna entre edição e visualização
  };

  const handleNameChange = (event) => {
    setUpdatedName(event.target.value); // Atualiza o estado com o novo nome
  };

  const handleDescriptionChange = (event) => {
    setUpdatedDescription(event.target.value); // Atualiza o estado com a nova descrição
  };

  const handleSaveChanges = async () => {
    setIsSaving(true); // Define o estado de carregamento para true

    const updatedData = {
      "id": empresa.id, // Mantém o id da empresa
      "nome_cliente": updatedName, // Usando o valor atualizado
      "descricao_cliente": updatedDescription, // Usando o valor atualizado
      "cnpj_cliente": empresa.cnpj_cliente, // Mantém os outros dados
      "email_cliente": empresa.email_cliente,
      "senha_cliente": empresa.senha_cliente,
      "is_premium": empresa.is_premium,
    };

    try {
      const response = await fetch(`http://localhost:8080/v1/jinni/cliente/${id}`, {
        method: 'PUT', // Usando PUT para substituir todos os dados necessários
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData), // Envia os dados atualizados
      });

      if (!response.ok) {
        // Caso a resposta não seja ok, mostre o erro do servidor
        const errorText = await response.text();
        throw new Error(`Erro ao salvar dados: ${errorText}`);
      }

      const data = await response.json();
      setEmpresa(data); // Atualiza os dados da empresa na tela
      setIsEditing(false); // Desativa o modo de edição
    } catch (error) {
      console.error(error);
      setError('Erro ao salvar os dados');
    } finally {
      setIsSaving(false); // Define o estado de carregamento como falso
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!empresa) return <div>Empresa não encontrada.</div>;

  return (
    <div className={style.telas}>
      <HeaderOficial2 />
      <div className={style.navegacao}>
        <NavBar2 />
        <div className={style.perfil}>
          <img src={edit} className={style.edit} onClick={handleEditToggle} />
          <ProfilePhoto empresa={empresa} />
          
          {/* Se estiver editando, exibe o campo de edição para o nome */}
          {isEditing ? (
            <input
              type="text"
              value={updatedName}
              onChange={handleNameChange}
              className={style.inputEdit}
            />
          ) : (
            <h1>{empresa.cliente && empresa.cliente.length > 0 ? empresa.cliente[0].nome_cliente : "Not found"}</h1>
          )}

          <img src={estrelas} alt="Avaliação" />

          {/* Se estiver editando, exibe o campo de edição para a descrição */}
          {isEditing ? (
            <div>
              <textarea
                value={updatedDescription}
                onChange={handleDescriptionChange}
                rows="4"
                cols="50"
                className={style.textareaEdit}
              />
              <button onClick={handleSaveChanges} disabled={isSaving}>
                {isSaving ? 'Salvando...' : 'Salvar'}
              </button>
            </div>
          ) : (
            <p className={style.descricao}>
              {empresa.cliente && empresa.cliente.length > 0
                ? empresa.cliente[0].descricao_cliente
                : "Not found"}
            </p>
          )}

          <p>Projetos realizados:</p>
          <div className={style.card}>
            {empresa.cliente && empresa.cliente.length > 0
              ? empresa.cliente[0].Projetos
              : "Not found"}
          </div>

          <p>Freelancers contratados:</p>
          <div className={style.card}>
            {empresa.cliente && empresa.cliente.length > 0
              ? empresa.cliente[0].quantidade_freelancers
              : "Not found"}
          </div>
        </div>

        <div className={style.detalhe}>
          <ul className={style.navigate}>
            <li onClick={(e) => changeScreen(1, e)} className={`${style.selecionado}`}>Início</li>
            <li onClick={(e) => changeScreen(2, e)}>Portfólio</li>
          </ul>
          <div>
            {currentScreen === 1 && <Inicio listPortfolio={empresa.portfolio} key={empresa.id} />}
            {currentScreen === 2 && <Portfolio style={style} key={empresa.id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpresaDetails;
