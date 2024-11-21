import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import style from '../Css/perfilFreelancer.module.css'
import HeaderOficial from '../Bases/HeaderOficial.js'
import NavBar2 from '../Bases/NavBar2.js'
import img from '../img/image 1.png'
import estrelas from '../img/avaliacao.png'
import Portfolio from '../Pages/empresa/Portfolio.js'
import Inicio from '../Pages/empresa/InicioFreelancer.js'
import Projetos from '../Pages/empresa/ProjetosHistorico.js'

const FreelancerDetails = () => {
  const { id } = useParams(); // Obtém o ID do freelancer da URL
  const [freelancer, setFreelancer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
    const [currentScreen, setCurrentScreen] = useState(1);

    function changeScreen(screen, event) {
        document.querySelectorAll(`.${style.selecionado}`).forEach(el => {
            el.classList.remove(style.selecionado);
        });
        event.currentTarget.classList.add(style.selecionado);
        setCurrentScreen(screen);
    }

  useEffect(() => {
    const fetchFreelancerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/v1/jinni/freelancer/:id`);
        const data = await response.json();
        setFreelancer(data); // Armazena os dados do freelancer
      } catch (err) {
        setError('Erro ao carregar os dados do freelancer');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFreelancerDetails();
  }, [id]); // Sempre que o ID mudar, refaz a requisição

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!freelancer) {
    return <div>Freelancer não encontrado.</div>;
  }

  return (
    <div className={style.telas}>
            <HeaderOficial />
            <div className={style.navegacao}>
                <NavBar2 />
                <div className={style.perfil}>
                    <img src={img}></img>
                    <h1>Afonso</h1>
                    <img src={estrelas}></img>
                    <p className={style.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit lorem quam. Aenean et urna et nibh posuere suscipit. Sed gravida pellentesque mi sed gravida. Morbi pellentesque at elit sed mattis. Ut non velit orci. Aliquam hendrerit ipsum s</p>
                    <button className={style.botao} onClick={() => {
                        navigate('/Mensagens')
                    }}>enviar proposta particular</button>
                    <p>categorias</p>
                    <div className={style.card}>Front-End</div>
                    <p>habilidade</p>
                    <div className={style.card}>JavaScript</div>
                    <p>nível</p>
                    <div className={style.card}>Experiente</div>
                </div>

                <div className={style.detalhe}> 
                    <ul className={style.navigate}>
                        <li onClick={(e) => changeScreen(1, e)} className={`${style.selecionado}`}>Início</li>
                        <li onClick={(e) => changeScreen(2, e)} className={``}>Portfólio</li>
                        <li onClick={(e) => changeScreen(3, e)} className={``}>Projetos</li>
                    </ul>
                    <div>
                        {currentScreen === 1 ? (
                            <Inicio style={style} />
                        ) : currentScreen === 2 ? (
                            <Portfolio style={style} />
                        ) : (
                            <Projetos style={style} />
                        )}
                    </div>
                </div>
            </div>

        </div>
  );
};

export default FreelancerDetails;
