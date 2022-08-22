import './item.css';
import React from 'react';
import { Link }  from "react-router-dom";

const Item = ({info}) => {
    return(
        <Link to={`/detalle/${info.id}`} className="product">
            <img src={info.pictureUrl} alt="" />
            <p>{info.title} ${info.price}</p>
        </Link>
    )

}

export default Item;