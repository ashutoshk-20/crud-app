import React from 'react'
import axios from 'axios'
import {useFormik} from 'formik'
import { useState,useEffect } from 'react'

const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/"

export function AddEmployee(){
    const[post,setPost] = useState(null);

    useEffect(()=>{
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        })
        .catch(error =>{
            console.error("There was an error fetching data",error);
        });
    }, []);

    const formik = useFormik({
        initialValues: {
            firstName: "", lastName: "",
        },


        validate: (values) =>{
            let errors = {};
            if(!values.firstName){
                errors.firstName = "Please Enter the First Name";
            }
            if(!values.lastName){
                errors.lastName = "Please Enter the Last Name";
            }
            return errors;
        },

        onSubmit: (values) =>{
            axios.post(baseURL,{
                firstName : values.firstName,
                lastName : values.lastName,
            }).then((response)=>{
                setPost(response.data);
                alert("Employee Added successfully");
            })
            .catch(error =>{
                console.error("There was an error adding the employee",error);
            });
        }

        
    });

    return(
        <div>
            <h1>----------------------Form Operations----------------------</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name : &nbsp;&nbsp;</label>
                <input type="text" id="firstName" onChange={formik.handleChange} value={formik.values.firstName}/>&nbsp;&nbsp;
                <br/>
                <div>
                    {
                        formik.touched.firstName && formik.errors.firstName ?(
                            <div style={{color:'red'}}> {formik.errors.firstName} </div>
                        ) : null
                    }
                </div>
                <br/>


                <label htmlFor="lastName">Last Name : &nbsp;&nbsp;</label>
                <input type="text" id="lastName" onChange={formik.handleChange} value={formik.values.lastName}/>&nbsp;&nbsp;
                <br/>
                <div>
                    {
                        formik.touched.lastName && formik.errors.lastName ?(
                            <div style={{color:'red'}}> {formik.errors.lastName} </div>
                        ) : null
                    }
                </div>
                <br/>

                <button>Submit</button>
            </form>

            {post && (<h3>Added employee : {post.firstName} {post.lastName}</h3>)}
        </div>
    );
}