import React, { useState, useEffect } from "react";
import style from "../../Css/chatTela.module.css"


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
    <div className={style.chat-app}>
      {/* Coluna da lista de contatos */}
      <div className={style.contact-list}>
        <input
          type="text"
          placeholder="pesquisar conversas"
          className={style.search-input}
        />
        <div className={style.contact-item} onClick={() => setSelectedContact("Serena Van Der Woodsen")}>
          <img src="/serena.jpg" alt="Serena" className={style.contact-photo} />
          <div className={style.contact-info}>
            <h4>Serena Van Der Woodsen</h4>
            <span className={style.status-online}>online</span>
          </div>
        </div>
        <div className={style.contact-item} onClick={() => setSelectedContact("Francisco de Almeida")}>
          <img src="/francisco.jpg" alt="Francisco" className={style.contact-photo} />
          <div className={style.contact-info}>
            <h4>Francisco de Almeida</h4>
            <span className={style.status-offline}>offline</span>
          </div>
        </div>
      </div>

      {/* Coluna do chat */}
      <div className={style.chat-box}>
        <div className={style.chat-header}>
          <img
            src={selectedContact === "Serena Van Der Woodsen" ? "/serena.jpg" : "/francisco.jpg"}
            alt={selectedContact}
            className={style.chat-header-photo}
          />
          <h4>{selectedContact}</h4>
          <span className={`${style.status} ${selectedContact === "Serena Van Der Woodsen" ? style.online : style.offline}`}>
            {selectedContact === "Serena Van Der Woodsen" ? style.online : style.offline}
          </span>
        </div>
        <div className={style.chat-messages}>
          {messages
            .filter((msg) => msg.contact === selectedContact)
            .map((msg, index) => (
              <div key={index} className={`${style.message} ${msg.username === username ? style.sent : style.received}`}>
                <p>{msg.text}</p>
                <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
              </div>
            ))}
        </div>
        <div className={style.chat-input}>
          <input
            type="text"
            placeholder="message..."
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
