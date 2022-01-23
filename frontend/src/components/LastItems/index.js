import React, { useEffect, useState } from "react";
import axios from 'axios';

import Card from "../../components/Card";
import "./styles.css";

function LastItems(props) {

    const [entity, setEntity] = useState("");
    const [lastItems, setLastItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        switch (props.entity) {
            case "resource":
                setEntity("recursos");

                axios.get(`https://educa-mais.herokuapp.com/resource`)
                    .then((response) => {
                        let arrayLength = response.data.length;

                        if (arrayLength > 3) {

                            setLastItems(response.data.slice((arrayLength - 3), arrayLength));

                        } else {

                            setLastItems(response.data);

                        }

                        setLoading(false);
                    });

                break;
            case "event":

                axios.get(`https://educa-mais.herokuapp.com/event`)
                    .then((response) => {
                        let arrayLength = response.data.length;

                        if (arrayLength > 3) {

                            setLastItems(response.data.slice((arrayLength - 3), arrayLength));

                        } else {

                            setLastItems(response.data);

                        }

                        setLoading(false);
                    });

                setEntity("eventos");
                break;
            case "course":

                axios.get(`https://educa-mais.herokuapp.com/course`)
                    .then((response) => {
                        let arrayLength = response.data.length;

                        if (arrayLength > 3) {

                            setLastItems(response.data.slice((arrayLength - 3), arrayLength));

                        } else {

                            setLastItems(response.data);

                        }

                        setLoading(false);
                    });

                setEntity("cursos");
                break;
            default:
                break;
        }
    }, []);

    let content;

    if (loading) {

        content = 
            <div className="loading-last-items">
                <p>Carregando...</p>
            </div>

    } else {

        content = 
            <>
                <div className="cards">
                    {
                        lastItems.map((data) => {
                            return (
                                <Card 
                                    key={data.id}
                                    title={data.title}
                                    image={data.image}
                                    showOptions={false}
                                    editLink={`/${entity.slice(0, -1)}/editar?id=${data.id}`}
                                    deleteLink={`/${entity.slice(0, -1)}/excluir?id=${data.id}`}
                                    showLink={`/${entity.slice(0, -1)}/detalhes?id=${data.id}`}
                                />
                            )
                        })
                    }
                </div>
            </>

    }

    return (
        <div className="container-cards">
            <h2>Últimos {entity}</h2>
            {content}
        </div>
    )
}

export default LastItems;