import React from "react";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

function NewResource() {
    return (
        <div className="container-new-resource">
            <Sidebar />
            <div className="new-resource">
                <h1>Adicionar recurso</h1>

                <div className="new-resource-content">

                    <form className="new-resource-form">
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

                        <label for="collection">Coleção</label>
                        <select id="collection" name="collection">
                            <option value="">Coleção 1</option>
                            <option value="">Coleção 2</option>
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

export default NewResource;