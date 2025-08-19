import { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const login = (userData, tokenData) => {
        setUser(userData);
        setToken(tokenData);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
    };

    return (
        <UserContext.Provider value={{ user, token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};