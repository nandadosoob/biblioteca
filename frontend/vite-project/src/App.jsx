import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'
import EdicaoLivro from './pages/EdicaoLivro/EdicaoLivro'
import EdicaoUsuario from './pages/EdicaoUsuario/EdicaoUsuario'
import CadastroLivro from './pages/Cadastro/CadastroLivro'
import CadastroUsuario from './pages/Cadastro/CadastroUsuario'
import Pesquisa from './pages/Pesquisa/Pesquisa'
import LayoutBase from './components/LayoutBase'
import Login from './pages/Login/Login'


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
          <Route path="EdicaoUsuario" element={<EdicaoUsuario />} />
          <Route path="Cadastro" element={<Home />} />
          <Route path="CadastroLivro" element={<CadastroLivro />} />
          <Route path="CadastroUsuario" element={<CadastroUsuario />} />
          <Route path="Historico" element={<Home />} />
          <Route path="Dividas" element={<Home />} />
          <Route path="Emprestimo" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
