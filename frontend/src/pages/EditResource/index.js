import React from "react";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

function EditResource() {
    return (
        <div className="container-edit-resource">
            <Sidebar />
            <div className="edit-resource">
                <h1>Editar recurso</h1>

                <div className="edit-resource-content">

                    <form className="edit-resource-form">
                        <label for="title">Título</label>
                        <input id="title" name="title"></input>
                        
                        <label for="description">Descrição</label>
                        <input id="description" name="description"></input>

                        <label for="image">Imagem representativa</label>
                        <input id="image" type="file" name="image"></input>

                        <label for="keywords">Palavras chave</label>
                        <input id="keywords" name="keywords"></input>

                        <label for="authors">Autor(es)</label>
                        <select id="authors" name="authors">
                            <option value="">João Mendes</option>
                            <option value="">João Mendes</option>
                        </select>

                        <div className="btn-submit">
                            <input type="submit" value="Enviar" />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default EditResource;