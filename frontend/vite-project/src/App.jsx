import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'
import EdicaoLivro from './pages/EdicaoLivro/EdicaoLivro'
import TelaEdicaoLivro from './pages/EdicaoLivro/TelaEdicaoLivro'
import EdicaoUsuario from './pages/EdicaoUsuario/EdicaoUsuario'
import TelaEdicaoUsuario from './pages/EdicaoUsuario/TelaEdicaoUsuario'
import CadastroLivro from './pages/Cadastro/CadastroLivro'
import CadastroUsuario from './pages/Cadastro/CadastroUsuario'
import Pesquisa from './pages/Pesquisa/Pesquisa'
import Emprestimo from "./pages/Emprestimo/Emprestimo";
import LayoutBase from './components/LayoutBase'
import Login from './pages/Login/Login'
import Historico from './pages/Historico/Historico';
import CadastroAutor from './pages/Cadastro/CadastroAutor';
import Dividas from './pages/Dividas/Dividas';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="authenticate" element={<Authentication />} />        
         <Route path="/login" element={<Login />} />
        <Route path="/" element={<LayoutBase />}>
          <Route index element={<Home />} />
          <Route path="pesquisa" element={<Pesquisa />} />
          <Route path="EdicaoLivro" element={<EdicaoLivro />} />
          <Route path="TelaEdicaoLivro" element={<TelaEdicaoLivro/>} />
          <Route path="EdicaoUsuario" element={<EdicaoUsuario />} />
          <Route path="TelaEdicaoUsuario/:id" element={<TelaEdicaoUsuario />} />
          <Route path="Cadastro" element={<Home />} />
          <Route path="CadastroLivro" element={<CadastroLivro />} />
          <Route path="CadastroUsuario" element={<CadastroUsuario />} />
          <Route path="Historico" element={<Historico />} />
          <Route path="Dividas" element={<Dividas />} />
          <Route path="Emprestimo" element={<Emprestimo />} />
          <Route path="Autor" element={<CadastroAutor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
