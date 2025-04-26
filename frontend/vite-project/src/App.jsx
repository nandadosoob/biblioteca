import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'
import EdicaoLivro from './pages/EdicaoLivro/EdicaoLivro'
import EdicaoUsuario from './pages/EdicaoUsuario/EdicaoUsuario'
import CadastroLivro from './pages/Cadastro/CadastroLivro'
import CadastroUsuario from './pages/Cadastro/CadastroUsuario'
import Menu from './components/Menu/Menu'

function App() {
  

  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pesquisa" element={<Home/>}/>
        <Route path="/authenticate" element={<Authentication/>}/>
        <Route path="/EdicaoLivro" element={<EdicaoLivro/>}/>
        <Route path="/EdicaoUsuario" element={<EdicaoUsuario/>}/>
        <Route path="/Cadastro" element={<Home/>}/>
        <Route path="/CadastroLivro" element={<CadastroLivro/>}/>
        <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
        <Route path="/Historico" element={<Home/>}/>
        <Route path="/Dividas" element={<Home/>}/>
        <Route path="/Emprestimo" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
