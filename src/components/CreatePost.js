import React, {useContext, useRef} from 'react';
import "./Style.css"
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {

    const title = useRef()
    const articleText = useRef()

    const {getPostArr, setPostArr, setUser} = useContext(mainContext)

    const nav = useNavigate()

    function createPost() {
        const post = {
            title: title.current.value,
            articleText: articleText.current.value
        }
        setPostArr([...getPostArr, post])

        nav("/main")

    }

    return (
        <div>
            <div className="container">
                <input ref={title} className="input" type="text" placeholder="Title"/>
                <input ref={articleText} className="input" type="text" placeholder="Article text"/>


                <button onClick={createPost} className="btn">Create Post</button>
            </div>
        </div>
    );
};

export default CreatePost;