import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import './cart.css';


const Cart = () => {
    const {cart, totalPrice} = useCartContext();

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
            <p className="total">
                Total: ${totalPrice()}
            </p>
        </>
    )
}

export default Cart;