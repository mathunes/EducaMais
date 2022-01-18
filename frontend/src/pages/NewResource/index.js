import React, { useEffect, useState } from "react";
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
    const [authorsList, setAuthorsList] = useState([]);
    const [collection, setCollection] = useState("");
    const [eventsList, setEventsList] = useState([]);
    const [coursesList, setCoursesList] = useState([]);

    useEffect(() => {
        axios.get(`https://educa-mais.herokuapp.com/author`)
            .then((response) => {
                setAuthorsList(response.data);
            })
            .catch((e) => {
                console.log(e.message)
            });

        axios.get(`https://educa-mais.herokuapp.com/event`)
            .then((response) => {
                setEventsList(response.data);
            })
            .catch((e) => {
                console.log(e.message);
            });

        axios.get(`https://educa-mais.herokuapp.com/course`)
            .then((response) => {
                setCoursesList(response.data);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

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
        let value = Array.from(e.target.selectedOptions, option => option.value);

        let arrayAuthors = value.map((authorId) => {
            return {id: authorId}
        })

        setAuthors(arrayAuthors);
    }

    const postData = (e) => {
        e.preventDefault();

        axios.post(`https://educa-mais.herokuapp.com/resource`, {
            "title": title,
            "description": description,
            "link": link,
            "image": image,
            "createdAt": createdAt,
            "registeredAt": registeredAt,
            "keyWord": keywords,
            "authors": authors
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
                        <input id="title" name="title" onChange={(e) => setTitle(e.target.value)} required/>
                        
                        <label for="description">Descrição</label>
                        <input id="description" name="description" onChange={(e) => setDescription(e.target.value)} required/>

                        <label for="link">Link</label>
                        <input id="link" name="link" onChange={(e) => setLink(e.target.value)} required/>

                        <label for="image">Imagem representativa</label>
                        <input id="image" type="file" name="image" onChange={encodeImageFileAsURL} />

                        <label for="createdAt">Data de criação</label>
                        <input type="date" id="createdAt" name="createdAt" onChange={(e) => setCreatedAt(e.target.value)} required/>

                        <label for="registeredAt">Data de criação</label>
                        <input type="date" id="registeredAt" name="registeredAt" onChange={(e) => setRegisteredAt(e.target.value)} required/>

                        <label for="keywords">Palavras chave (separadas por vírgula)</label>
                        <input id="keywords" name="keywords" onChange={keyWordsStringToArray} required/>

                        <label for="authors">Autor(es)</label>
                        <select id="collection" name="authors" multiple onChange={selectAuthors}>
                            {
                                authorsList.map((data) => {
                                    return (
                                        <option key={data.id} value={data.id}>{data.name}</option>
                                    )
                                })
                            }
                        </select>

                        <label for="collection">Coleção</label>
                        <select id="collection" name="collection" onChange={(e) => setCollection(e.target.value)} >
                            <option value="">-</option>
                            {
                                eventsList.map((data) => {
                                    return (
                                        <option key={data.id} value={data.id}>{data.title}</option>
                                    )
                                })
                            }
                            {
                                coursesList.map((data) => {
                                    return (
                                        <option key={data.id} value={data.id}>{data.title}</option>
                                    )
                                })
                            }
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