import React, {useContext} from 'react';
import "./Style.css"
import {Link} from "react-router-dom";
import mainContext from "../context/mainContext";

const Toolbar = ({user}) => {

    const {getPage, setUser, getPostArr} = useContext(mainContext)

    const result = () => {
        const myPosts = getPostArr.filter(x => x.username === user)

        let likesOnPosts = 0
        let comments = 0

        myPosts.map(x => {
            likesOnPosts += x.likes.length
            comments += x.comments.length
        })

        return {
            postsAmount: myPosts.length,
            likesAmount: likesOnPosts,
            commentsAmount: comments
        }
    }

    return (
        <div>
            <div className="toolbar">
                <div className="flex">
                    <div>
                        <h1>{user}</h1>
                    </div>
                    <div className="flex column">
                        <div>Posts: {result().postsAmount}</div>
                        <div>Likes: {result().likesAmount}</div>
                        <div>Comments: {result().commentsAmount}</div>
                    </div>

                </div>

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
                {getPage !== "/login" && getPage !== "/register" && getPage !== "/" && getPage !== "/createPost" &&
                <Link to="/">
                    <h1 onClick={() => setUser(null)}>LOGOUT</h1>
                </Link>
                }
            </div>
        </div>
    );
};

export default Toolbar;