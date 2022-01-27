import React, {useContext} from 'react';
import Likes from "./Likes";
import Comments from "./Comments";
import mainContext from "../context/mainContext";
import "./Style.css"

const SingleArticle = ({post}) => {


    return (
        <div>
            <div className="flex column">
                <div className="cardPost">
                    <h1>{post.title}</h1>
                    <h3>{post.articleText}</h3>
                    <h3>{post.username}</h3>
                    <h4>Likes: {post.likes}</h4>

                    <Likes />
                    <Comments />
                </div>
            </div>
        </div>
    );
};

export default SingleArticle;