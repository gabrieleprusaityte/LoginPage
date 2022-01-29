import React, {useContext, useRef} from 'react';
import "./Style.css"
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const Login = ({userLogin}) => {

    const {getError, getUserArr, setUser, getUser} = useContext(mainContext)


    const username = useRef()
    const password = useRef()

    const nav = useNavigate()

    function loginIn() {
        const user = {
            username: username.current.value,
            password: password.current.value
        }

        const userLogin = getUserArr.find(x => x.username === user.username && x.password === user.password)
        if (userLogin) {
            nav("/createPost")
        }
        setUser(userLogin.username)
        console.log(userLogin)
    }

    return (
        <div>
            <div className="container">
                <input className="input" ref={username} type="text" placeholder="username"/>
                <input className="input" ref={password} type="text" placeholder="password"/>
                <h3>{getError}</h3>


                <button onClick={() => loginIn(userLogin)} className="btn">Login</button>
            </div>
        </div>
    );
};

export default Login;