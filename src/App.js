import './App.css';
import './index.css';
import './componente/Css/coluna.module.css';
import Inicio from './componente/Pages/Inicio.js';
import Cadastro from './componente/Pages/Cadastro.js';
import Login from './componente/Pages/Login.js';
import TelaInicial from './componente/Pages/TelaInicial.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'





function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Cadastro' element={<Cadastro/>}/>
          <Route path='/TelaIncial' element={<TelaInicial/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
