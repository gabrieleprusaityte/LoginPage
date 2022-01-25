import React, {useContext, useEffect} from 'react';
import mainContext from "../context/mainContext";

const HomePage = () => {

    const {setPage} = useContext(mainContext)

    useEffect(() => {
        setPage("/")
    }, [])

    return (
        <div>
            <h1>HOMEPAGE</h1>
        </div>
    );
};

export default HomePage;