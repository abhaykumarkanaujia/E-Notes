import React from 'react';
import AuthContext from './AuthContext';

const AuthState = (props) => {

    const baseurl = "http://localhost:3001/api/auth"

    const login = async (email, password) => {

        try {

            const response = await fetch(`${baseurl}/login`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            return result;

        } catch (err) {

            console.log(err);

        }

    }

    const signup = async (name, email, password) => {

        try {

            const response = await fetch(`${baseurl}/adduser`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password })
            });

            const result = await response.json();

            return result;

        } catch (err) {

            console.log(err);

        }

    }

    return (
        <AuthContext.Provider value={{ login, signup }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;