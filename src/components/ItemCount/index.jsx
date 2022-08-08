//import '//itemCount.css';

import React, { useState } from 'react';

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, SetCount] = useState(initial);

    const decrease = () => {
        SetCount(count - 1);
    }

    const increase = () => {
        SetCount(count + 1);
    }

    return (
        <div className='contador'>
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;