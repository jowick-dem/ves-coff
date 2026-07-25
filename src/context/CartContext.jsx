import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Attempt to load from local storage
        const savedCart = localStorage.getItem('coffee_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save to local storage whenever cart changes
    useEffect(() => {
        localStorage.setItem('coffee_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                toast.success(`Increased quantity of ${item.name}`);
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            toast.success(`Added ${item.name} to order`);
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
        toast.error('Item removed from order');
    };

    const updateQuantity = (id, amount) => {
        setCartItems((prevItems) =>
            prevItems.map((i) => {
                if (i.id === id) {
                    const newQuantity = Math.max(1, i.quantity + amount);
                    return { ...i, quantity: newQuantity };
                }
                return i;
            })
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const cartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
