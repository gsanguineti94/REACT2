import ItemList from '../ItemList';
import React, {useEffect, useState} from "react";
import Title from '../title';
import { useParams } from "react-router-dom";

const products = [
    {id: 1, pictureUrl: "https://i.imgur.com/fXA241T.jpg", title: "Focacchia de tomate", price: "$280", category:"Fochacchias"},
    {id: 2, pictureUrl: "https://i.imgur.com/m7YamBC.jpg", title: "Hogaza de masa madre", price: "$500", category:"MasaMadre"},
    {id: 3, pictureUrl: "https://i.imgur.com/IIs0te8.jpg", title: "Pan de molde Brioche", price: "$550", category:"Moldes"},
    {id: 4, pictureUrl:"https://i.imgur.com/dm4n7EK.png", title:"Prepizza", price:"$250", category:"MasaMadre"},
    {id: 5, pictureUrl:"https://i.imgur.com/zIJShhs.png", title:"Hogaza con semillas", price:"$600", category:"MasaMadre"},
    {id: 6, pictureUrl:"https://i.imgur.com/pP59tNS.png", title:"Pan de Molde blanco", price:"$400", category:"Moldes"},
    {id: 7, pictureUrl:"https://i.imgur.com/8TIi1nL.png", title:"Pan de Molde integral", price:"$500", category:"Moldes"},

];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(products => products.category === categoriaId)));
        }
        else{
            getData.then(res => setData(res));
        }
    },[categoriaId]);

    return (
        <>
            <Title greeting={texto} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;