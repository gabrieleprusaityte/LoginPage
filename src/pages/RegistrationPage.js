import React, {useContext, useEffect, useRef} from 'react';
import mainContext from "../context/mainContext";
import RegisterUser from "../components/RegisterUser";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";


const RegistrationPage = () => {

    const {setPage} = useContext(mainContext)


    useEffect(() => {
        setPage("/register")
    }, [])

    return (
        <div>
            <h1>REGISTRATION PAGE</h1>
            <RegisterUser/>
        </div>
    );
};

export default RegistrationPage;