import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";

import "./styles.css";

function NewResource() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [collection, setCollection] = useState("");

    const encodeImageFileAsURL = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const keyWordsStringToArray = (e) => {
        var keyWordsString = e.target.value;

        var keyWordsArray = keyWordsString.split(",");

        var keyWordsArrayFormatted = keyWordsArray.map((keyWord) => {
            return keyWord.trim();
        });

        setKeywords(keyWordsArrayFormatted);
    }

    const selectAuthors = (e) => {
        const selectedAuthors = [...e.target.options]
            .filter(x => x.selected)
            .map(x => x.value);

        setAuthors(selectedAuthors);
    }

    const postData = (e) => {

        console.log(authors);

        e.preventDefault();

    }

    return (
        <div className="container-new-resource">
            <Sidebar />
            <div className="new-resource">
                <h1>Adicionar recurso</h1>

                <div className="new-resource-content">

                    <form className="new-resource-form" onSubmit={postData}>
                        <label for="title">Título</label>
                        <input id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
                        
                        <label for="description">Descrição</label>
                        <input id="description" name="description" onChange={(e) => setDescription(e.target.value)} />

                        <label for="image">Imagem representativa</label>
                        <input id="image" type="file" name="image" onChange={encodeImageFileAsURL} />

                        <label for="keywords">Palavras chave</label>
                        <input id="keywords" name="keywords" onChange={keyWordsStringToArray} />

                        <label for="authors">Autor(es)</label>
                        <select id="collection" name="authors" multiple onChange={selectAuthors}>
                            <option value="João">João Mendes</option>
                            <option value="Maria">Maria Mendes</option>
                        </select>

                        <label for="collection">Coleção</label>
                        <select id="collection" name="collection" >
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