import { NavLink } from 'react-router-dom'
import { IconSearch, IconPencil, IconCirclePlus, IconBook2, IconUserEdit, IconHistory, IconLibrary, IconBookmarks, IconMoon, IconSun } from '@tabler/icons-react';
import React, { useState } from 'react'
import './Menu.css'
export default function Menu() {

    const [submenu, setSubmenu] = useState(false)


    const MostraSubMenu = () => {
        setSubmenu(!submenu)
    }

    return (
        <div>

            <nav>
                <img src="bibliotecLogoDFB.PNG" id='logo' />
                <div id='divdescubra'>
                    <h3>Descubra</h3>

                    <NavLink to="/">
                        <IconSearch className='icone' />
                        Pesquisar livro
                    </NavLink>

                </div>



                <div id='adm'>
                    <h3>Administração</h3>

                    <NavLink to="/Edicao">
                        <IconPencil className='icone' />
                        Edição
                    </NavLink>

                    {/* <NavLink to="/">
                    <IconBook2 className='icone'/>
                    Livros
                </NavLink>

                <NavLink to="/">
                <IconUserEdit className='icone'/>
                    Usuarios
                </NavLink> */}

                    <NavLink to="/Cadastro">
                        <IconCirclePlus className='icone' onClick={MostraSubMenu} />
                        Cadastro
                    </NavLink>

                    {/* <NavLink to="/" >
                        <IconBook2 sclassName='icone' />
                        Livros
                    </NavLink> */}

                    {/* <NavLink to="/" >
                        <IconUserPlus className='icone' />
                        Usuarios
                    </NavLink> */}



                    <NavLink to="/">
                        <IconHistory className='icone' />
                        Histórico
                    </NavLink>

                    <NavLink to="/">
                        <IconLibrary className='icone' />
                        Dividas
                    </NavLink>

                    <NavLink to="/">
                        <IconBookmarks className='icone' />
                        Emprestimo
                    </NavLink>

                </div>

                <footer>
                    <button>
                        <IconMoon className='icone' />
                        {/* <IconSun className='icone'/> */}
                        Moon
                    </button>
                </footer>

            </nav>
        </div>
    )
}