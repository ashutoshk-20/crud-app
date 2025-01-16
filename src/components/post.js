//CRUD Operation - Create : POST

import React from "react";
import { useState, useEffect} from "react";
import axios from 'axios';

const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/"

export function Post(){
    const [post,setPost] = useState(null);

    const fname = "Sarthak";
    const lname = "Dongare";

//This will run on the first render to fetch the data from the API
    useEffect(() =>{
        axios.get(baseURL).then((response) =>{
            setPost(response.data);
        });
    }, []);

    function createPost(){
        axios.post(baseURL, {
            firstName : fname,
            lastName : lname
        }).then((response) => {
            setPost(response.data);
        });
    }

    if (!post) return "No Post";

    return(
        <div>
            <h1>---------------------------------POST Operation--------------------------------</h1>
            <h3> Welcome {post.firstName} {post.lastName}</h3>
            <button onClick={createPost}>Create Post</button>
            <br></br>
        </div>
    )
}