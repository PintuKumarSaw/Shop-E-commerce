import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, qty = 1) => {
        setCartItems((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + qty } : item
                );
            } else {
                return [...prev, { ...product, qty }];
            }
        });
    };

    const decreaseFromCart = (product) => {
    setCartItems((prev) =>
        prev
            .map((item) =>
                item.id === product.id ? { ...item, qty: item.qty - 1 } : item
            )
            .filter((item) => item.qty > 0) // remove item if qty reaches 0
    );
};

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decreaseFromCart }}>
    {children}
</CartContext.Provider>

    );
};
