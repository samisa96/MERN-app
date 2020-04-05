import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Navbar from "./nav";

function Register (){

    const [userData, setuserData] = useState({
     name:"",
     email: "",
     password: ""

    });
    
    function handleChange(event) {
        const { name, value } = event.target;
        setuserData(prevdata => {
            return {
                ...prevdata,
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:5000/register", userData)
            .then(res => {
                if(res === 200){
                    console.log("User added to our DB");
                }
            })
            
    }

    return (
        <div> 
            <Navbar />
            <form onSubmit = {handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" onChange = {handleChange} type="text" className="form-control" value= {userData.name}placeholder="Enter your Name"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" onChange = {handleChange} type="email" className="form-control" aria-describedby="emailHelp" value= {userData.email}placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name = "password" onChange = {handleChange} type="password" className="form-control" value = {userData.password} placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    );
}



export default Register;