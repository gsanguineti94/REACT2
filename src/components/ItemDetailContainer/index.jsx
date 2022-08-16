import ItemDetail from "../ItemDetail";
import React, {useState, useEffect} from "react";

const producto = {id: 1, pictureUrl: "https://i.imgur.com/fXA241T.jpg", title: "Focacchia de tomate", price: "$280", detail:"Exquisita focacchia de tomate y romero, elaborada con masa blanca y condimentada con aceite de oliva y sal gruesa"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 2000);
        });

        getData.then(res => setData(res))
    }, [])

    return(
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;