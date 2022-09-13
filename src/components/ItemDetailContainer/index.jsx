import ItemDetail from "../ItemDetail";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const products = [
    {id: 1, pictureUrl: "https://i.imgur.com/mn8NsAM.png", title: "Focacchia de tomate", price: 280, category:"Fochacchias"},
    {id: 2, pictureUrl: "https://i.imgur.com/GrgoqfS.png", title: "Hogaza de masa madre", price: 500, category:"MasaMadre"},
    {id: 3, pictureUrl: "https://i.imgur.com/SKou6Rk.png", title: "Pan de molde Brioche", price: 550, category:"Moldes"},
    {id: 4, pictureUrl:"https://i.imgur.com/dm4n7EK.png", title:"Prepizza", price: 250, category:"MasaMadre"},
    {id: 5, pictureUrl:"https://i.imgur.com/zIJShhs.png", title:"Hogaza con semillas", price: 600, category:"MasaMadre"},
    {id: 6, pictureUrl:"https://i.imgur.com/pP59tNS.png", title:"Pan de Molde blanco", price: 400, category:"Moldes"},
    {id: 7, pictureUrl:"https://i.imgur.com/8TIi1nL.png", title:"Pan de Molde integral", price: 500, category:"Moldes"},
];
export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
            getData.then(res => setData(res.find(products => products.id === parseInt(detalleId))))
    }, [])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;