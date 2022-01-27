import React, {useContext, useEffect, useRef} from 'react';
import mainContext from "../context/mainContext";
import "./Style.css"
import SingleArticle from "../components/SingleArticle";
import Likes from "../components/Likes";
import Comments from "../components/Comments";

const MainPage = () => {

    const {setPage, getPostArr} = useContext(mainContext)

    useEffect(() => {
        setPage("/main")
    }, [])



    return (
        <div>
            <h1>MAIN PAGE</h1>
            <div className="flex">
                {getPostArr.map((x, i) => <SingleArticle post={x} key={i}/>)}

            </div>

        </div>
    );
};

export default MainPage;