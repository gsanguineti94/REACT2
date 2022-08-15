import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useEffect, useState} from "react";
import Title from '../title';

const products = [
    {id: 1, pictureUrl: "https://i.imgur.com/fXA241T.jpg", title: "Focacchia de tomate", price: "280"},
    {id: 2, pictureUrl: "https://i.imgur.com/m7YamBC.jpg", title: "Hogaza de masa madre", price: "500"},
    {id: 3, pictureUrl: "https://i.imgur.com/IIs0te8.jpg", title: "Pan de molde Brioche", price: "550"},
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 3000);
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