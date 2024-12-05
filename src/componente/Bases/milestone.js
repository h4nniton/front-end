import React, { useState } from "react";
import "./MilestoneSystem.css"; // Certifique-se de criar o arquivo CSS correspondente

const MilestoneSystem = () => {
  const [activeTab, setActiveTab] = useState("negociacao"); // Controle do tab ativo

  const milestones = [
    {
      id: 1,
      title: "Etapa 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et eros a libero sodales aliquet.",
    },
    {
      id: 2,
      title: "Etapa 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et eros a libero sodales aliquet.",
    },
    {
      id: 3,
      title: "Etapa 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et eros a libero sodales aliquet.",
    },
    {
      id: 4,
      title: "Etapa 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et eros a libero sodales aliquet.",
    },
  ];

  return (
    <div className="milestone-system">
      {/* Navegação */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "negociacao" ? "active" : ""}`}
          onClick={() => setActiveTab("negociacao")}
        >
          Em negociação
        </button>
        <button
          className={`tab ${activeTab === "pagamento" ? "active" : ""}`}
          onClick={() => setActiveTab("pagamento")}
        >
          Pagamento
        </button>
        <button
          className={`tab ${activeTab === "iniciados" ? "active" : ""}`}
          onClick={() => setActiveTab("iniciados")}
        >
          Iniciados
        </button>
        <button
          className={`tab ${activeTab === "finalizados" ? "active" : ""}`}
          onClick={() => setActiveTab("finalizados")}
        >
          Finalizados
        </button>
      </div>

      {/* Conteúdo */}
      <div className="milestone-container">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="milestone-card">
            <div className="card-header">
              <h4>{milestone.title}</h4>
              <button className="view-button">👁️</button>
            </div>
            <p>{milestone.description}</p>
            <div className="card-actions">
              <button className="action-button">💬 Chat</button>
              <button className="action-button">🗑️ Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneSystem;
