import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useEffect, useState} from "react";
import Title from '../title';

const products = [
    {id: 1, image: "https://i.imgur.com/fXA241T.jpg", prod: "Focacchia de tomate" },
    {id: 2, image: "https://i.imgur.com/m7YamBC.jpg", prod: "Hogaza de masa madre"},
    {id: 3, image: "https://i.imgur.com/IIs0te8.jpg", prod: "Pan de molde Brioche"},
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 3000);
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