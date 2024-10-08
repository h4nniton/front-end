import React, { useState } from 'react';
import imgFrelancer from '../img/freelancer.png'
import imgCliente from '../img/cliente.png'
import styles from '../Css/cadastro.module.css'
import { useNavigate } from 'react-router-dom'


let select1 = false
let select2 = false
const EventoButao = () => {

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)

    const toggleBotao = () => {
        setIsActive(prevState => !prevState);
    };

    const escolha1 = () => {
        setSelectedOption('cliente')
        toggleBotao()
        if(!select1){
            select1 = true
            document.getElementById('select1').style.backgroundColor='#03396C'
        } else {
            select1 = false
            document.getElementById('select1').style.backgroundColor='#ffffff'
        }
    }

    const escolha2 = () => {
        setSelectedOption('freelancer')
        toggleBotao()
        if(!select2){
            select2 = true
            document.getElementById('select2').style.backgroundColor='#03396C'
        } else {
            select2 = false
            document.getElementById('select2').style.backgroundColor='#ffffff'
        }
    }

    const handleContinue = () => {
        if (selectedOption === 'cliente') {
            navigate('/CadastroCms')
        } else if (selectedOption === 'freelancer') {
            navigate('/CadastroFreelancer')
        }
    }

    return (
        <div className={styles.tela}>
            <div className={styles.escolhas}>
                <button className={styles.escolha1} id='cms' onClick={escolha1} >
                    <div className={styles.papai}><div id='select1' className={styles.bola}></div></div>
                    <div>
                        <img src={imgFrelancer}></img>
                        <p>Sou um cliente contratando para um projeto</p>
                    </div>

                </button>

                <button className={styles.escolha2} id='freelancer' onClick={escolha2}>
                    <div className={styles.papai}><div id='select2'className={styles.bola}></div></div>
                    <div>
                        <img src={imgCliente}></img>
                        <p>Sou um freelancer procurando por um trabalho</p>
                    </div>

                </button>

            </div>

            <button
                id="continue"
                style={{ backgroundColor: isActive ? '#03396C' : '#979797', color: 'white', padding: '10px 20px', border: 'none', width: '20%', height: '5vh', 'border-radius': '25px', cursor: 'pointer', fontFamily: "Poppins", }}
                onClick={handleContinue}
            >
                continuar
            </button>
        </div>
    );
};

export default EventoButao;