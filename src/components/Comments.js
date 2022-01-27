import React, {useContext} from 'react';
import {useRef} from "react";
import mainContext from "../context/mainContext";
import "./Style.css"

const Comments = ({post}) => {

    const commentText = useRef()



    const {getInput, setInput, getCommentArr, setCommentArr, getCommentBox, setCommentBox, getComment, setComment, getSend, setSend} = useContext(mainContext)
    let trigger = true

    function addComment() {
        setInput(1)
    }
    function sendComment() {
        const comment = commentText.current.value
        setCommentArr([...getCommentArr, comment])
    }

    function showComments() {
        trigger = !trigger
        trigger ? setCommentBox(1) : setCommentBox(0)
    }



    return (
        <div>
            {getInput === 1 &&
            <div className="flex">
                <input className="input" ref={commentText} type="text" placeholder="Comment here..."/>
                <button className="btn1" onClick={sendComment}>Send</button>
            </div>
            }
            {getCommentBox === 1 &&
            <div className="box">
                {getCommentArr.map((x, i) => <div className="commentLine" key={i}>
                    <p>{x}</p>
                </div>)}
            </div>
            }
            <div className="flex space-btw">
                <button onClick={() => addComment(post)}>Add Comment</button>
                <button onClick={() => showComments(post)}>Show Comments</button>
            </div>
        </div>
    );
};

export default Comments;