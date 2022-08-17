import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useEffect, useState} from "react";
import Title from '../title';

const products = [
    {id: 1, pictureUrl: "https://i.imgur.com/fXA241T.jpg", title: "Focacchia de tomate", price: "$280", category:"fochacchias"},
    {id: 2, pictureUrl: "https://i.imgur.com/m7YamBC.jpg", title: "Hogaza de masa madre", price: "$500", category:"masaMadre"},
    {id: 3, pictureUrl: "https://i.imgur.com/IIs0te8.jpg", title: "Pan de molde Brioche", price: "$550", category:"moldes"},
    {id: 4, pictureUrl:"https://i.imgur.com/dm4n7EK.png", title:"Prepizza", price:"$250", category:"masaMadre"},
    {id: 5, pictureUrl:"https://i.imgur.com/zIJShhs.png", title:"Hogaza con semillas", price:"$600", category:"masaMadre"},
    {id: 6, pictureUrl:"https://i.imgur.com/pP59tNS.png", title:"Pan de Molde blanco", price:"$400", category:"moldes"},
    {id: 7, pictureUrl:"https://i.imgur.com/8TIi1nL.png", title:"Pan de Molde integral", price:"$500", category:"moldes"},

];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getData.then(res => setData(res));
    },[]);

    const onAdd = (count) => {
        console.log('Compraste ' + count + ' unidades');
        alert('Compraste ' + count + ' unidades');
    }

    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;