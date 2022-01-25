import React, {useContext, useEffect} from 'react';
import mainContext from "../context/mainContext";
import CreatePost from "../components/CreatePost";

const CreatePostPage = () => {

    const {setPage} = useContext(mainContext)

    useEffect(() => {
        setPage("/createPost")
    }, [])


    return (
        <div>
            <CreatePost />
        </div>
    );
};

export default CreatePostPage;