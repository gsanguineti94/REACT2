import ItemCount from '../ItemCount';
import React from "react";
import Title from '../title';


export const ItemListContainer = ({ texto }) => {

    const onAdd = (count) => {
        console.log('Compraste ' + count + ' unidades');
        alert('Compraste ' + count + ' unidades');
    }

    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;