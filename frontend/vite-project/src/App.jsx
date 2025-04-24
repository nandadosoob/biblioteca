import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'
import Authentication from './pages/Authentication/Authentication'
import EdicaoLivro from './pages/EdicaoLivro/EdicaoLivro'
import Menu from './components/Menu/Menu'

function App() {
  

  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pesquisa" element={<Home/>}/>
        <Route path="/authenticate" element={<Authentication/>}/>
        <Route path="/Edicao" element={<Home/>}/>
        <Route path="/EdicaoLivro" element={<EdicaoLivro/>}/>
        <Route path="/EdicaoUsuario" element={<Home/>}/>
        <Route path="/Cadastro" element={<Home/>}/>
        <Route path="/CadastroLivro" element={<Home/>}/>
        <Route path="/CadastroUsuario" element={<Home/>}/>
        <Route path="/Historico" element={<Home/>}/>
        <Route path="/Dividas" element={<Home/>}/>
        <Route path="/Emprestimo" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
