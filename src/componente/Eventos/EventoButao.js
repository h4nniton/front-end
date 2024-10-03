import React, { useState } from 'react';
import imgFrelancer from '../img/freelancer.png'
import imgCliente from '../img/cliente.png'
import styles from '../Css/cadastro.module.css'
import { useNavigate } from 'react-router-dom'



const EventoButao = () => {
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const toggleBotao = () => {
        setIsActive(prevState => !prevState); 
    };

    const escolha1 = () =>{
        setSelectedOption('cliente')
        toggleBotao()
        
    }

    const escolha2 = () =>{
        setSelectedOption('freelancer')
        toggleBotao()
    }

    const handleContinue = () => {
        if (selectedOption === 'cliente') {
            navigate('/CadastroCms')
        } else if (selectedOption === 'freelancer') {
            navigate('/CadastroFreelancer')
        }
    }

    return (
        <div>
            <div className={styles.escolhas}>
                    <button className={styles.escolha1} id='cms' onClick={escolha1} >
                        <div className={styles.papai}><div className={styles.bola}></div></div>
                        <div>
                            <img src={imgFrelancer}></img>
                            <p>Sou um cliente contratando para um projeto</p>
                        </div>

                    </button>

                    <button className={styles.escolha2} id='freelancer' onClick={escolha2}>
                        <div className={styles.papai}><div className={styles.bola}></div></div>
                        <div>
                            <img src={imgCliente}></img>
                            <p>Sou um freelancer procurando por um trabalho</p>
                        </div>

                    </button>

                </div>
            
            <button 
                id="continue" 
                style={{ backgroundColor: isActive ? '#03396C' : '#979797', color: 'white', padding: '10px 20px', border: 'none', width: '20%', height: '5vh',  'border-radius': '25px', cursor: 'pointer' }}
                onClick={handleContinue}
            >
             continuar   
            </button>
        </div>
    );
};

export default EventoButao;