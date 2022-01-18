import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import axios from 'axios';

import "./styles.css";

function NewResource() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [registeredAt, setRegisteredAt] = useState("");
    const [keywords, setKeywords] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [collection, setCollection] = useState("");

    const encodeImageFileAsURL = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result.split(",")[1]);
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
        e.preventDefault();

        axios.post(`https://educa-mais.herokuapp.com/resource`, {
            "title": title,
            "description": description,
            "link": link,
            "image": image,
            "createdAt": "2021-12-21",
            "registeredAt": "2021-12-21",
            "keyWord": [
                "keyword example"
            ],
            "authors": [
                {
                    "id": 1
                }
            ]
        });
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

                        <label for="link">Link</label>
                        <input id="link" name="link" onChange={(e) => setLink(e.target.value)} />

                        <label for="image">Imagem representativa</label>
                        <input id="image" type="file" name="image" onChange={encodeImageFileAsURL} />

                        <label for="createdAt">Data de criação</label>
                        <input type="date" id="createdAt" name="createdAt" onChange={(e) => setCreatedAt(e.target.value)} />

                        <label for="registeredAt">Data de criação</label>
                        <input type="date" id="registeredAt" name="registeredAt" onChange={(e) => setRegisteredAt(e.target.value)} />

                        <label for="keywords">Palavras chave (separadas por vírgula)</label>
                        <input id="keywords" name="keywords" onChange={keyWordsStringToArray} />

                        <label for="authors">Autor(es)</label>
                        <select id="collection" name="authors" multiple onChange={selectAuthors}>
                            <option value="João">João Mendes</option>
                            <option value="Maria">Maria Mendes</option>
                        </select>

                        <label for="collection">Coleção</label>
                        <select id="collection" name="collection" onChange={(e) => setCollection(e.target.value)} >
                            <option value="">-</option>
                            <option value="1">Coleção 1</option>
                            <option value="2">Coleção 2</option>
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