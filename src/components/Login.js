import React, {useContext, useRef} from 'react';
import "./Style.css"
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const {getError, getUserArr, setUser} = useContext(mainContext)

    const username = useRef()
    const password = useRef()

    const nav = useNavigate()

    function loginIn(x) {
        const login = {
            username: username.current.value,
            password: password.current.value
        }
        console.log(x)
        console.log(login)

        for (const index in getUserArr) {
            if (getUserArr[index].username === login.username && getUserArr[index].password === login.password) {

                nav("/createPost")
            }
        }

    }

    return (
        <div>
            <div className="container">
                <input className="input" ref={username} type="text" placeholder="username"/>
                <input className="input" ref={password} type="text" placeholder="password"/>
                <h3>{getError}</h3>

                <button onClick={loginIn} className="btn">Login</button>
            </div>
        </div>
    );
};

export default Login;