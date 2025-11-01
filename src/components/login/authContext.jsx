import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false); 

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, showLoginModal, setShowLoginModal }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
