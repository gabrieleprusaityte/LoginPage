import React, {useContext, useState} from 'react';
import Likes from "./Likes";
import Comments from "./Comments";
import mainContext from "../context/mainContext";
import "./Style.css"

const SingleArticle = ({post, index, user}) => {




        const {getPostArr, setPostArr} = useContext(mainContext)

    function likePost() {
        if (!getPostArr[index].likes.includes(user)) {
            getPostArr[index].likes.push(user)
            setPostArr([...getPostArr])
        } else {
            getPostArr[index].likes = getPostArr[index].likes.filter(x => x !== user)
            setPostArr([...getPostArr])
        }
    }


    return (
        <div>
            <div className="flex column">
                <div className="cardPost">
                    <h1>{post.title}</h1>
                    <h3>{post.articleText}</h3>
                    <h3>{post.username}</h3>
                    <h3>Likes: {post.likes.length}</h3>

                    {user && <div>
                        {user !== post.username &&
                        <button onClick={likePost}>
                            {post.likes.includes(user) ? "Dislike" : "Like"}
                        </button>}
                    </div>}

                    {user && <Comments username={user} getPosts={getPostArr} setPosts={setPostArr} index={index}/> }


                    <div className='comments'>
                        {post.comments.map((x, i) => <div key={i}>
                            <div>{x.text}</div>
                            <div>{x.username}</div>
                        </div>)}
                    </div>



                </div>
            </div>
        </div>
    );
};

export default SingleArticle;