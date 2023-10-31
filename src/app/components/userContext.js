'use client'
import { createContext } from 'react';

const UserContext = createContext({
    user: null,
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
    updateUserContext: () => {}
});

export default UserContext;

