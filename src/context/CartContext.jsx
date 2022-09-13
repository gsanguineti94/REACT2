import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
	    const { quantity = 0 } = cart.find(products => products.id === item.id) || {};
	    const newCart = cart.filter(prod => prod.id !== item.id);
	    setCart([...newCart, { ...item, quantity: quantity + newQuantity }])
	}

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.find(products => products.id === id) ? true : false;
    }

    const removeProduct = (id) => setCart(cart.filter(products => products.id !== id));

    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            addProduct,
            removeProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;