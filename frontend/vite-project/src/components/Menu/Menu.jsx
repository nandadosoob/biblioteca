import { NavLink } from 'react-router-dom'
import { IconSearch, IconPencil, IconCirclePlus, IconBook2, IconUserEdit, IconHistory, IconLibrary, IconBookmarks, IconMoon } from '@tabler/icons-react';
import React, { useState } from 'react'
import './Menu.css'

export default function Menu() {

    const [submenuEdit, setSubmenuEdit] = useState(false)
    const MostraSubMenuEdit = () => {
        setSubmenuEdit(!submenuEdit)
    }

    const [submenuCadas, setSubmenuCadas] = useState(false)
    const MostraSubMenuCadas = () => {
        setSubmenuCadas(!submenuCadas)
    }

    return (
        <div>
            <nav>
                <img src="bibliotecLogoDFB.PNG" id='logo' />
                <div id='divdescubra'>
                    <h3>Descubra</h3>
                    <NavLink to="/pesquisa">
                        <IconSearch className='icone' />
                        Pesquisar livro
                    </NavLink>
                </div>

                <div id='adm'>
                    <h3>Administração</h3>

                    <NavLink onClick={MostraSubMenuEdit}>
                        <IconPencil className='icone' />
                        Edição
                    </NavLink>

                    {submenuEdit && (
                        <>
                            <NavLink to="/EdicaoLivro" id='bookSub' className="submenu-link">
                                <IconBook2 className='icone' />
                                Livros
                            </NavLink>
                            <NavLink to="/EdicaoUsuario" id='userSub' className="submenu-link">
                                <IconUserEdit className='icone' />
                                Usuarios
                            </NavLink>
                        </>
                    )}

                    <NavLink onClick={MostraSubMenuCadas}>
                        <IconCirclePlus className='icone' />
                        Cadastro
                    </NavLink>

                    {submenuCadas && (
                        <>
                            <NavLink to="/CadastroLivro" id='bookSub' className="submenu-link">
                                <IconBook2 className='icone' />
                                Livros
                            </NavLink>
                            <NavLink to="/CadastroUsuario" id='userSub' className="submenu-link">
                                <IconUserEdit className='icone' />
                                Usuarios
                            </NavLink>
                        </>
                    )}

                    <NavLink to="/Historico">
                        <IconHistory className='icone' />
                        Histórico
                    </NavLink>

                    <NavLink to="/Dividas">
                        <IconLibrary className='icone' />
                        Dívidas
                    </NavLink>

                    <NavLink to="/emprestimo">
                        <IconBookmarks className='icone' />
                        Emprestimo
                    </NavLink>
                </div>

                <footer>
                    <button>
                        <IconMoon className='icone' />
                        Moon
                    </button>
                </footer>
            </nav>
        </div>
    )
}
