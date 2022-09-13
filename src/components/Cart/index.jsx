import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import './cart.css';


const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Guido',
            email: 'g.sanguineti94@gmail.com',
            phone: '123123',
            address: 'Calle Falsa 123'
        },
        items: cart.map(product =>({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () =>{
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then (({id}) => console.log(id))
    }

    if (cart.length === 0) {
        return(
            <>
                <div className="disclaimer">
                <p>No hay elementos en el carrito</p>
                <Link to='/Productos'>
                    <button>Explorar Productos</button>
                </Link>
                </div>
            </>
        );
    }

    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <div className="finalizar">
                <p>
                    Total: ${totalPrice()}
                </p>
                <button onClick={handleClick}>Finalizar Compra</button>
            </div>
        </>
    )
}

export default Cart;