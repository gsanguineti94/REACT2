import "./itemDetail.css";

import React, {useState} from "react";

import { useCartContext } from "../../context/CartContext";
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";

export const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (count) => {
        setGoToCart(true);
        addProduct(data, count);

    }

    return(
        <div className="container">
            <div className="detail">
                <img className="detail_image"  src={data.pictureUrl} alt="" />
                <div className="content">
                    <h1 className="title">{data.title}</h1>
                    <h1 className="price">${data.price}</h1>
                    <h2 className="description">{data.detail}</h2>
                    {
                        goToCart
                            ? <Link to='/cart'>Ir al Carrito</Link>
                            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;