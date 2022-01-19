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

    const handleEncodeImageFileAsURL = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result.split(",")[1]);
        }
        reader.readAsDataURL(file);
    }

    const handleKeyWordsStringToArray = (e) => {
        var keyWordsString = e.target.value;

        var keyWordsArray = keyWordsString.split(",");

        var keyWordsArrayFormatted = keyWordsArray.map((keyWord) => {
            return keyWord.trim();
        });

        setKeywords(keyWordsArrayFormatted);
    }

    const handleSelectAuthors = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);

        let arrayAuthors = value.map((authorId) => {
            return {id: authorId}
        })

        setAuthors(arrayAuthors);
    }

    const putCollection = (resourceId) => {
        let [ collectionId, collectionType ] = collection.split("-");

        switch (collectionType) {
            case "event":
                
                axios.get(`https://educa-mais.herokuapp.com/event/${collectionId}`)
                .then((response) => {

                    let resourcesCollection = response.data.resources;

                    resourcesCollection.push({id: resourceId});

                    axios.put(`https://educa-mais.herokuapp.com/event`, {
                        id: collectionId,
                        resources: resourcesCollection
                    });

                });

                break;
        
            case "course":
                
                axios.get(`https://educa-mais.herokuapp.com/course/${collectionId}`)
                .then((response) => {

                    let resourcesCollection = response.data.resources;

                    resourcesCollection.push({id: resourceId});

                    axios.put(`https://educa-mais.herokuapp.com/course`, {
                        id: collectionId,
                        resources: resourcesCollection
                    });

                });

                break;
            default:
                break;
        }
    }

    const postResource = (e) => {
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
        }).then((response) => {
            putCollection(response.data.id)
        })

    }

    return (
        <div className="container-new-resource">
            <Sidebar />
            <div className="new-resource">
                <h1>Adicionar recurso</h1>

                <div className="new-resource-content">

                    <form className="new-resource-form" onSubmit={postResource}>
                        <label for="title">Título</label>
                        <input id="title" name="title" onChange={(e) => setTitle(e.target.value)} required/>
                        
                        <label for="description">Descrição</label>
                        <input id="description" name="description" onChange={(e) => setDescription(e.target.value)} required/>

                        <label for="link">Link</label>
                        <input id="link" name="link" onChange={(e) => setLink(e.target.value)} required/>

                        <label for="image">Imagem representativa</label>
                        <input id="image" type="file" name="image" onChange={handleEncodeImageFileAsURL} />

                        <label for="createdAt">Data de criação</label>
                        <input type="date" id="createdAt" name="createdAt" onChange={(e) => setCreatedAt(e.target.value)} required/>

                        <label for="registeredAt">Data de publicação</label>
                        <input type="date" id="registeredAt" name="registeredAt" onChange={(e) => setRegisteredAt(e.target.value)} required/>

                        <label for="keywords">Palavras chave (separadas por vírgula)</label>
                        <input id="keywords" name="keywords" onChange={handleKeyWordsStringToArray} required/>

                        <label for="authors">Autor(es)</label>
                        <select id="authors" name="authors" multiple onChange={handleSelectAuthors}>
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
                                        <option key={data.id} value={data.id+"-event"}>{data.title} (evento)</option>
                                    )
                                })
                            }
                            {
                                coursesList.map((data) => {
                                    return (
                                        <option key={data.id} value={data.id+"-course"}>{data.title} (curso)</option>
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