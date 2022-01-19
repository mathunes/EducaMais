import React, { useEffect, useState } from "react";
import axios from 'axios';

import Card from "../../components/Card";
import "./styles.css";

function LastItems(props) {

    const [entity, setEntity] = useState("");
    const [lastItems, setLastItems] = useState([]);

    useEffect(() => {
        switch (props.entity) {
            case "resource":
                setEntity("recursos");

                axios.get(`https://educa-mais.herokuapp.com/resource`)
                    .then((response) => {
                        let arrayLength = response.data.length;

                        console.log(arrayLength);

                        if (arrayLength > 3) {

                            setLastItems(response.data.slice((arrayLength - 3), arrayLength));

                        } else {

                            setLastItems(response.data);

                        }
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
                    });

                setEntity("cursos");
                break;
            default:
                break;
        }
    }, []);


    return (
        <div class="container-cards">
            <h2>Últimos {entity}</h2>
            <div className="cards">
                {
                    lastItems.map((data) => {
                        return (
                            <Card 
                                title={data.title}
                                image={data.image}
                                editLink=""
                                deleteLink=""
                                showLink=""
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LastItems;