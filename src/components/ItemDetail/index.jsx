import React, {useState} from "react";
import "./itemDetail.css";
import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";

export const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (count) => {
        setGoToCart(true);
    }

    return(
        <div className="container">
            <div className="detail">
                <img className="detail_image"  src={data.pictureUrl} alt="" />
                <div className="content">
                    <h1 className="title">{data.title}</h1>
                    <h1 className="price">{data.price}</h1>
                    <h2 className="description">{data.detail}</h2>
                    {
                        goToCart
                            ? <Link to='/cart'>Finalizar Compra</Link>
                            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;