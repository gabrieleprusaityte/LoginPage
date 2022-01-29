import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import "./Style.css"

const Likes = ({post, login}) => {

    const {getPostArr, getLikes, setLikes, getButton, setButton} = useContext(mainContext)




    return (
        <div>
            <div className="flex column">

            </div>
        </div>
    );
};

export default Likes;