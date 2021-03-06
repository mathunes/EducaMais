import React, { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import axios from "axios";

import Sidebar from "../../components/Sidebar";

import "./styles.css";

function EditResource() {

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
    const [idResource, setIdResource] = useState(0);
    const [resourceAuthors, setResourceAuthors] = useState([]);
    const [redirect, setRedirect] = useState(false);

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

            setIdResource(new URLSearchParams(window.location.search).get("id"));

        axios.get(`https://educa-mais.herokuapp.com/resource/${new URLSearchParams(window.location.search).get("id")}`)
            .then((response) => {

                let authorIdsTemp = [];

                response.data.authors.map((author) => {
                    authorIdsTemp.push(author.id);
                });

                setResourceAuthors(authorIdsTemp);

                setTitle(response.data.title);
                setDescription(response.data.description);
                setLink(response.data.link);
                setImage(response.data.image);
                setCreatedAt(response.data.createdAt);
                setRegisteredAt(response.data.registeredAt);
                setKeywords(response.data.keyWord);
                setAuthors(response.data.authors);
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

    const putResource = (e) => {
        e.preventDefault();

        axios.put(`https://educa-mais.herokuapp.com/resource`, {
            "id": idResource,
            "title": title,
            "description": description,
            "link": link,
            "image": image,
            "createdAt": createdAt,
            "registeredAt": registeredAt,
            "keyWord": keywords,
            "authors": authors
        }).then((response) => {
            putCollection(response.data.id);

            setRedirect(true);
        });

    }

    if (redirect) {
        return <Navigate to={`/recurso/detalhes?id=${idResource}`} />
    }

    return (
        <div className="container-edit-resource">
            <Sidebar />
            <div className="edit-resource">
                <h1>Editar recurso</h1>

                <div className="edit-resource-content">

                    <form className="edit-resource-form" onSubmit={putResource}>
                        <label htmlFor="title">T??tulo</label>
                        <input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                        
                        <label htmlFor="description">Descri????o</label>
                        <input id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>

                        <label htmlFor="link">Link</label>
                        <input id="link" name="link" value={link} onChange={(e) => setLink(e.target.value)} required/>

                        <label htmlFor="image">Imagem representativa (PNG)</label>
                        <input id="image" type="file" name="image" accept="image/png" onChange={handleEncodeImageFileAsURL} />

                        <label htmlFor="createdAt">Data de cria????o</label>
                        <input type="date" id="createdAt" value={createdAt} name="createdAt" onChange={(e) => setCreatedAt(e.target.value)} required/>

                        <label htmlFor="registeredAt">Data de publica????o</label>
                        <input type="date" id="registeredAt" value={registeredAt} name="registeredAt" onChange={(e) => setRegisteredAt(e.target.value)} required/>

                        <label htmlFor="keywords">Palavras chave (separadas por v??rgula)</label>
                        <input id="keywords" name="keywords" value={keywords} onChange={handleKeyWordsStringToArray} required/>

                        <label htmlFor="authors">Autor(es)</label>
                        <select id="authors" name="authors" multiple onChange={handleSelectAuthors}>
                            {
                                authorsList.map((data) => {
                                    let selected = resourceAuthors.indexOf(data.id) !== -1 ? true : false;

                                    return (
                                        <option 
                                            key={data.id}
                                            value={data.id}
                                            selected={selected}
                                        >
                                            {data.name}
                                        </option>
                                    )
                                })
                            }
                        </select>

                        <label htmlFor="collection">Cole????o</label>
                        <select id="collection" name="collection" onChange={(e) => setCollection(e.target.value)} >
                            <option value="">-</option>
                            {
                                eventsList.map((data) => {
                                    let selected = data.resources.some((collection) => {
                                        return (collection.id.toString() === idResource);
                                    })

                                    return (
                                        <option key={data.id} value={data.id+"-event"} selected={selected}>{data.title} (evento)</option>
                                    )
                                })
                            }
                            {
                                coursesList.map((data) => {
                                    let selected = data.resources.some((collection) => {
                                        return (collection.id.toString() === idResource);
                                    })

                                    return (
                                        <option key={data.id} value={data.id+"-course"} selected={selected}>{data.title} (curso)</option>
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

export default EditResource;