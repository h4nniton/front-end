import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cadastro from '../Pages/Cadastro.js'
import Login from '../Pages/Login.js'
import NavBar from '../Pages/navBar.js'
import image from '../img/Logo.png'
import styles from '../Css/header.module.css'

function Header() {
    return (
        <div className={styles.header}>
            <img src={image}></img>
            <Router >
                <NavBar />
                <Routes>
                    <Route path="/cadastro" element={<Cadastro />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </Router>

        </div>
    )
}

export default Header