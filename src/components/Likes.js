import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import "./Style.css"

const Likes = ({post}) => {

    const {getLikes, setLikes, getButton, setButton} = useContext(mainContext)

    function likePost(x) {
        setLikes(getLikes + 1)
        setButton(1)
        console.log(x)

    }
    function dislikePost(x) {
        setLikes(getLikes - 1)
        setButton(0)
        console.log(x)
    }

    return (
        <div>
            <div className="flex">
                {getButton === 0 && <button onClick={() => likePost(post)}>Like</button>}
                {getButton === 1 && <button onClick={() => dislikePost(post)}>Dislike</button>}
            </div>
        </div>
    );
};

export default Likes;