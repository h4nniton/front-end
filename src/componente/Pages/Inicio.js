import styles from '../Css/inicio.module.css'
import Header from '../Bases/Header.js'
import img from '../img/img.png'
import img2 from '../img/img2.png'



function Inicio() {
    return (
        <div className={styles.tela}>
            <Header />

            <div className={styles.propaganda}>
                <div className={styles.info}>
                    <img src={img}></img>
                    <div className={styles.text}>
                        <p className={styles.subText}>FIND THE BEST</p>
                        <p className={styles.subText}></p>
                        <p className={styles.subTextSpecial}>OPPORTUNITIES</p>
                        <p className={styles.subText1}>HERE!</p>
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.text}>
                        <p className={styles.subText}>THE BEST PLACE IN THE</p> 
                        <p className={styles.subTextSpecial}>WORLD</p>
                        <p className={styles.subText}>TO HIRE</p>
                        <p className={styles.subTextSpecial}>FREELANCERS</p>
                    </div>
                    
                      
                    <img src={img2}></img>
                </div>
            </div>
        </div>
    )
}

export default Inicio