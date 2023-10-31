'use client'
import { useState, useEffect } from 'react';
import userContext from './userContext';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user');
    };

    const updateUserContext = (updatedUserData) => {
        setUser(updatedUserData);
        localStorage.setItem('user', JSON.stringify(updatedUserData));
    };


    return (
        <userContext.Provider value={{ user, isLoggedIn, login, logout, updateUserContext }}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;

