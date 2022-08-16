import React from "react";
import "./itemDetail.css"

export const ItemDetail = ({data}) => {
    return(
        <div className="container">
            <div className="detail">
                <img className="detail_image"  src={data.pictureUrl} alt="" />
                <div className="content">
                    <h1 className="title">{data.title}</h1>
                    <h1 className="price">{data.price}</h1>
                    <h2 className="description">{data.detail}</h2>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;