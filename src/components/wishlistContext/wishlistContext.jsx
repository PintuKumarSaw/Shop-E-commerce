import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        try {
            const saved = localStorage.getItem("wishlist");
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        } catch { }
    }, [wishlist]);

    const addToWishlist = (product) => {
        setWishlist((prev) => {
            if (!product || !product.id) return prev;  
            if (prev.find((p) => p.id === product.id)) return prev;  
            return [...prev, product];
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((p) => p.id !== id));
    };

    const toggleWishlist = (product) => {
        setWishlist((prev) => {
            if (!product || !product.id) return prev;
            return prev.find((p) => p.id === product.id)
                ? prev.filter((p) => p.id !== product.id)
                : [...prev, product];
        });
    };

    return (
        <WishlistContext.Provider
            value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
