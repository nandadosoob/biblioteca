import { NavLink } from 'react-router-dom'
import React from 'react'
import './Menu.css'
export default function Menu() {

    return (
        <div>
            <div></div>
            <nav>
                <h3>Descubra</h3>

                <NavLink to="/">
                    Pesquisar livro
                </NavLink>

                <h3>Administração</h3>

                <NavLink to="/Edicao">
                    Edição
                </NavLink>

                <NavLink to="/Cadastro">
                    Cadastro
                </NavLink>

                <NavLink to="/">
                    Histórico
                </NavLink>

                <NavLink to="/">
                    Dividas
                </NavLink>

                <NavLink to="/">
                    Emprestimo
                </NavLink>

            </nav>
        </div>
    )
}