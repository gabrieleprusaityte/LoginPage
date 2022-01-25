import React, {useContext, useRef} from 'react';
import "./Style.css"
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const {getError, setError, getUserArr} = useContext(mainContext)

    const username = useRef()
    const password = useRef()

    const nav = useNavigate()

    function login(user) {

        // if (user.username !== username.current.value) return setError("You are not registered")
        // if (user.password !== password.current.value) return setError("Wrong password or you are not registered")
        // setError(null)

        nav("/createPost")
    }

    return (
        <div>
            <div className="container">
                <input className="input" ref={username} type="text" placeholder="username"/>
                <input className="input" ref={password} type="text" placeholder="password"/>
                <h3>{getError}</h3>

                <button onClick={login} className="btn">Login</button>
            </div>
        </div>
    );
};

export default Login;