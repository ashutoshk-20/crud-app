// CRUD - UPDATE : PUT

import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";


const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/"
var id = 6;

export function Put(){
    const [put,setPut] = useState(null);

    const fname = "Sarthak";
    const lname = "Dongare";

    useEffect(()=>{
        axios.get(baseURL + id).then((response) =>{
            setPut(response.data);
        });
    },[]);

    function updatePost(){
        axios.put(baseURL + id,{
            firstName : fname,
            lastName : lname
        }).then((response) =>{
            setPut(response.data);
        });
    }

    return(
        <div>
            <h1>-----------------GET Operation-----------------</h1>
            <h3>This is {put?.firstName} {put?.lastName}</h3>
            <br></br>
            <button onClick={updatePost}>Update Post</button>
        </div>
    )
}