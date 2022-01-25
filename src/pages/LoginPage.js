import React, {useContext, useEffect} from 'react';
import mainContext from "../context/mainContext";
import Login from "../components/Login";

const LoginPage = () => {


    const {setPage} = useContext(mainContext)

    useEffect(() => {
        setPage("/login")
    }, [])

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <Login />
        </div>
    );
};

export default LoginPage;