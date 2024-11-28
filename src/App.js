import './App.css';
import './index.css';
import './componente/Css/coluna.module.css';
import Inicio from './componente/Pages/Inicio.js';
import Cadastro from './componente/Pages/Cadastro.js';
import Login from './componente/Pages/Login.js';
import TelaInicial from './componente/Pages/freelancer/TelaInicial.js'
import TelaInicialEmpresa from './componente/Pages/empresa/TelaInicialEmpresa.js'
import CadastroCms from './componente/Pages/CadastroCms.js'
import CadastroFreelancer from './componente/Pages/CadastroFreelancer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PerfilCriacao from './componente/Pages/PerfilCriacao';
import PerfilHabilidade from './componente/Pages/PerfilHabilidade.js'
import FimCadastro from './componente/Pages/FimCadastro.js';
import Projetos from './componente/Pages/empresa/Projetos.js'
import Notificacoes from './componente/Pages/empresa/Notificacoes.js'
import Mensagens from './componente/Pages/empresa/Mensagens.js'
import PerfilFreelancer from './componente/Pages/freelancer/PerfilFreelancer.js';
import perfilEmpresa from './componente/Pages/empresa/PerfilEmpresa.js';
import Portfolio from './componente/Pages/empresa/Portfolio.js';
import ProjetosHistorico from './componente/Pages/empresa/ProjetosHistorico.js';
import InicioFreelancer from './componente/Pages/empresa/InicioFreelancer.js';
import Chat from './componente/Pages/chat/Chat.js';
import projetosFreelas from './componente/Pages/freelancer/Projetosfreelas.js'
import notificacoesFreelas from './componente/Pages/freelancer/ntificacoesFreelas.js';
import mensagensFreelas from './componente/Pages/freelancer/MensagensFreelas.js';
import EditarPerfil from './componente/Pages/EditarPerfil.js';
import FreelancerDetails from './componente/Bases/ShowPerfil.js'
import EmpresaDetails from './componente/Pages/empresa/PerfilEmpresa.js'





function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path='/TelaInicial' element={<TelaInicial />}></Route>
          <Route path='/TelaInicial2' element={<TelaInicialEmpresa />}></Route>
          <Route path='/CadastroCms' element={<CadastroCms />}></Route>
          <Route path='/CadastroFreelancer' element={<CadastroFreelancer />}></Route>
          <Route path='/CriacaoDePerfil' element={<PerfilCriacao />}></Route>
          <Route path='/PerfilHabilidade' element={<PerfilHabilidade />}></Route>
          <Route path='/FimCadastro' element={<FimCadastro />}></Route>
          <Route path='/Projetos' element={<Projetos />}></Route>
          <Route path='/Notificacoes' element={<Notificacoes />}></Route>
          <Route path='/Mensagens' element={<Mensagens />}></Route>
          <Route path='/perfilFreelancer' element={<PerfilFreelancer />}></Route>
          <Route path='/perfilEmpresa' element={<perfilEmpresa />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/ProjetosHistorico' element={<ProjetosHistorico />}></Route>
          <Route path='/Inicio' element={<InicioFreelancer />}></Route>
          <Route path='/Chat' element={<Chat />}></Route>
          <Route path='/ProjetosFreelancer' element={<projetosFreelas />}></Route>
          <Route path='/NotificacoesFreelancer' element={<notificacoesFreelas />}></Route>
          <Route path='/MensagensFreelancer' element={<mensagensFreelas />}></Route>
          <Route path='/Editar-Perfil' element={<EditarPerfil />}></Route>
          <Route path="/freelancer/:id" element={<FreelancerDetails />} />
          <Route path="/cliente/:id" element={<FreelancerDetails />} />




        </Routes>
      </Router>
    </div>
  );
}
export default App;
