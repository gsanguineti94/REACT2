import React, { useState } from "react";
export const CartContext = React.createContext('');

const CartProvider = ({ children }) => {

    const [cart, SetCart] = useState([]);

    const clearCart = () => SetCart([]);

    const isInCart = (id) => {
        return cart.find(products => products.id === id) ? true : false;
    }

    return(
        <CartContext.Provider value="Guido">
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;