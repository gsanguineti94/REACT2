import './item.css';
import React from 'react';

const Item = ({info}) => {
    return(
        <a href='' className="product">
            <img src={info.pictureUrl} alt="" />
            <p>{info.title} ${info.price}</p>
        </a>
    )

}

export default Item;