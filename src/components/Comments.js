import React, {useContext} from 'react';
import {useRef} from "react";
import mainContext from "../context/mainContext";
import "./Style.css"

const Comments = ({post, index, username, getPosts, setPosts}) => {

    const commentText = useRef()

    function commentPost() {
        const comment = {
            text: commentText.current.value,
            username
        }

        getPosts[index].comments.push(comment)
        setPosts([...getPosts])
    }


    return (
        <div>
            <input ref={commentText} type="text"/>
            <button onClick={commentPost}>Comment</button>
        </div>
    );
};

export default Comments;