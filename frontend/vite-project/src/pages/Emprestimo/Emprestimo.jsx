import React from "react";

import './Emprestimo.css'
import { IconCalendar } from "@tabler/icons-react";

export default function Emprestimo(){
    return(
        <div className="pagina-emprestimo">
            <h2>Empréstimo</h2>
            <div className="box-marrom">
                <div className="box-status">
                    <div className="forms">
                        <label htmlFor="locatario">Locatário</label>
                        <input type="text" name="locatario" id="locatario" /> 

                        <label htmlFor="">Leitor (a) | Registro Acadêmico</label>
                        <input type="text" />

                        <label htmlFor=""><IconCalendar></IconCalendar> Data</label>
                        <input type="text" />

                        <h3>Perfil</h3>
                        <div className="perfil-check">
                            <label><input id="professor" type="checkbox" /> Professor</label>
                            <label><input id="bibliotecario" type="checkbox" /> Bibliotecário</label>
                            <label><input id="aluno" type="checkbox" /> Aluno</label>
                        </div>
                    
                        <div className="forms-buttons">
                            <button>Salvar</button>
                            <button>Cancelar</button>
                        </div>
                    
                    </div>
                    <div className="imglivro">
                        <img src="https://m.media-amazon.com/images/I/61JenSx3wKL._AC_UF1000,1000_QL80_.jpg" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}