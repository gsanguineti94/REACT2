import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React from "react";
import Title from '../title';

const products = [
    {id: 1, image: "https://imgur.com/fXA241T", prod: "Focacchia de tomate" },
    {id: 2, image: "https://imgur.com/m7YamBC", prod: "Hogaza de masa madre"},
    {id: 3, image: "https://imgur.com/IIs0te8", prod: "Pan de molde Brioche"},
];

export const ItemListContainer = ({ texto }) => {

    const onAdd = (count) => {
        console.log('Compraste ' + count + ' unidades');
        alert('Compraste ' + count + ' unidades');
    }

    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList />
        </>
    );
}

export default ItemListContainer;