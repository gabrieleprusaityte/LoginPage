import React, {useContext} from 'react';
import "./Style.css"
import {Link} from "react-router-dom";
import mainContext from "../context/mainContext";

const Toolbar = () => {

    const {getPage} = useContext(mainContext)

    return (
        <div>
            <div className="toolbar">
                {getPage !== "/login" && getPage !== "/createPost" && getPage !== "/main" &&
                <Link to="/login">
                    <h1>LOGIN</h1>
                </Link>
                }
                {getPage !== "/register" && getPage !== "/createPost" && getPage !== "/main" &&
                <Link to="/register">
                    <h1>REGISTER</h1>
                </Link>
                }
                {getPage !== "/createPost" && getPage !== "/login" && getPage !== "/register" && getPage !== "/" &&
                <Link to="/createPost">
                    <h1>CREATE POST</h1>
                </Link>
                }
                {getPage !== "/main" && getPage !== "/login" && getPage !== "/register" && getPage !== "/" &&
                <Link to="/main">
                    <h1>MAIN PAGE</h1>
                </Link>
                }
            </div>
        </div>
    );
};

export default Toolbar;