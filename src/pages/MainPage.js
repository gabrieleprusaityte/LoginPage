import React, {useContext, useEffect} from 'react';
import mainContext from "../context/mainContext";
import "./Style.css"

const MainPage = () => {

    const {setPage, getPostArr, getUser} = useContext(mainContext)

    useEffect(() => {
        setPage("/main")
    }, [])


    return (
        <div>
            <h1>MAIN PAGE</h1>
            {getPostArr.map((x, i) => <div className="card" key={i}>
                <h1>{x.title}</h1>
                <h3>{x.articleText}</h3>
                <h3>{getUser}</h3>
            </div>)}
        </div>
    );
};

export default MainPage;