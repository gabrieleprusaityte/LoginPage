import React, {useContext, useRef, useState} from 'react';
import "./Style.css"
import {useNavigate} from "react-router-dom";
import mainContext from "../context/mainContext";

const RegisterUser = () => {

    const username = useRef()
    const password1 = useRef()
    const password2 = useRef()



    const {getUserArr, setUserArr, getError, setError, setUser} = useContext(mainContext)


    const nav = useNavigate()

    function createUser() {
        if (password1.current.value !== password2.current.value) return setError("password1 and password2 does not match")
        setError(null)
        const user = {
            username: username.current.value,
            password: password1.current.value
        }
        setUserArr([...getUserArr, user])
        console.log(user)
        console.log(getUserArr)
        setUser(user.username)
        nav("/login")
    }

    return (
        <div>
            <div className="container">
                <input className="input" ref={username} type="text" placeholder="username"/>
                <input className="input" ref={password1} type="text" placeholder="password1"/>
                <input className="input" ref={password2} type="text" placeholder="password2"/>
                <h3>{getError}</h3>

                <button onClick={createUser} className="btn">Create User</button>
            </div>
        </div>
    );
};

export default RegisterUser;