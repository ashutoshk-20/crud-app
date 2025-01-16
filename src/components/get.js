//CRUD : READ : GET

import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";


const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/"
var id = 4;

export function Get(){
    const [get, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL + id).then((response) => {
            setPost(response.data);
        });
    },[]);

    if(!get) return "Not Found";
    return(
        <div>
            <h1>--------------Get Operation --------------------</h1>
            <h2>First name : {get.firstName}</h2>
            <h2>Last Name : {get.lastName}</h2>
            
        </div>

    )
}