import React, { createContext, useEffect, useState } from 'react';
import { AuthContextType } from './AuthContextType';

export const authContext = createContext<AuthContextType>({
    user: "",
    login: () => { },
    logout: () => { }
});

const AuthProvider = (props: any) => {
    const [user, setUser] = useState<string>("");

    useEffect(() => {
        if (user !== "") {
            localStorage.setItem("user:navigation", user);
        }
    }, [user]);


    useEffect(() => {
        const loggedInUser = localStorage.getItem("user:navigation");
        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);

    const login = (email: string) => {
        setUser(email);
    };

    const logout = () => {
        setUser("");
    }

    return (
        <authContext.Provider value={{ user, login, logout }}>
            {props.children}
        </authContext.Provider>
    );
}


export default AuthProvider;