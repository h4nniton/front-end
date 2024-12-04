import React, { useState, useEffect } from "react";
import style from "../../Css/chatTela.module.css"; // Certifique-se que o caminho do CSS está correto
import avatarImg from "../../img/avatar.png"; // Imagem importada corretamente

const backendURL = "http://localhost:3001/messages"; // Substitua pelo endpoint correto

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("Serena Van Der Woodsen"); // Nome padrão
  const [selectedContact, setSelectedContact] = useState("Francisco de Almeida"); // Contato inicial

  // Função para buscar mensagens
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
          contact: selectedContact,
          timestamp: new Date().toISOString(),
        }),
      });
      setNewMessage(""); // Limpa o campo de mensagem
      fetchMessages(); // Atualiza as mensagens após enviar
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  // Polling para buscar mensagens
  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.chatApp}>
      {/* Coluna da lista de contatos */}
      <div className={style.contactList}>
        <input
          type="text"
          placeholder="Pesquisar conversas"
          className={style.searchInput}
        />
        <div
          className={style.contactItem}
          onClick={() => setSelectedContact("Serena Van Der Woodsen")}
        >
          <img src={avatarImg} alt="Serena" className={style.contactPhoto} />
          <div className={style.contactInfo}>
            <h4>Serena Van Der Woodsen</h4>
            <span className={style.statusOnline}>Online</span>
          </div>
        </div>
        <div
          className={style.contactItem}
          onClick={() => setSelectedContact("Francisco de Almeida")}
        >
          <img src={avatarImg} alt="Francisco" className={style.contactPhoto} />
          <div className={style.contactInfo}>
            <h4>Francisco de Almeida</h4>
            <span className={style.statusOffline}>Offline</span>
          </div>
        </div>
      </div>

      {/* Coluna do chat */}
      <div className={style.chatBox}>
        <div className={style.chatHeader}>
          <img
            src={avatarImg}
            alt={selectedContact}
            className={style.chatHeaderPhoto}
          />
          <h4>{selectedContact}</h4>
          <span
            className={`${style.status} ${
              selectedContact === "Serena Van Der Woodsen"
                ? style.online
                : style.offline
            }`}
          >
            {selectedContact === "Serena Van Der Woodsen" ? "Online" : "Offline"}
          </span>
        </div>
        <div className={style.chatMessages}>
          {messages
            .filter((msg) => msg.contact === selectedContact)
            .map((msg, index) => (
              <div
                key={index}
                className={`${style.message} ${
                  msg.username === username ? style.sent : style.received
                }`}
              >
                <p>{msg.text}</p>
                <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
              </div>
            ))}
        </div>
        <div className={style.chatInput}>
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
