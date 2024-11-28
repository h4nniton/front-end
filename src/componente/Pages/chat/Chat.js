import React, { useState, useEffect } from "react";

// Simulando backend com uma lista de mensagens (em um caso real, use uma API externa)
const backendURL = "http://localhost:3001/messages"; // Altere para sua API

const ChatApp = () => {
  const [messages, setMessages] = useState([]); // Armazena as mensagens
  const [newMessage, setNewMessage] = useState(""); // Mensagem nova do input
  const [username, setUsername] = useState(""); // Nome do usuário

  // Função para buscar mensagens (simula polling)
  const fetchMessages = async () => {
    try {
      const response = await fetch(backendURL);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
    }
  };

  // Função para enviar uma mensagem
  const sendMessage = async () => {
    if (!newMessage.trim() || !username.trim()) return;

    try {
      await fetch(backendURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          text: newMessage,
          timestamp: new Date().toISOString(),
        }),
      });
      setNewMessage(""); // Limpa o campo de mensagem
      fetchMessages(); // Atualiza as mensagens após enviar
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  // Busca mensagens regularmente (polling)
  useEffect(() => {
    fetchMessages(); // Busca inicial
    const interval = setInterval(fetchMessages, 2000); // Atualiza a cada 2 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Chat Simples</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            marginBottom: "10px",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            height: "300px",
            overflowY: "scroll",
          }}
        >
          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <strong>{msg.username}</strong>: {msg.text}
              <div style={{ fontSize: "0.8em", color: "#666" }}>
                {new Date(msg.timestamp).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <input
        type="text"
        placeholder="Digite sua mensagem"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        style={{
          padding: "10px",
          width: "80%",
          marginRight: "10px",
          boxSizing: "border-box",
        }}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default ChatApp;
