//CRUD - DELETE : DELETE


import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";


const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/"
var id = 4;

export function Delete(){
    const [del,setDel] = useState(null);

    useEffect(() => {
        axios.get(baseURL + id).then((response) => {
            setDel(response.data);
        });
    },[]);

    function deletePost(){
        axios.delete(baseURL + id).then((response)=>{
            setDel(null);
            alert("Record Delted");
        })
    }

    if(!del) return "Record Not found"

    return (
        <div>
            <h1>-----------Delete Operation---------------</h1>
            <button onClick={deletePost}>Delete Post</button>
        </div>
    )
}