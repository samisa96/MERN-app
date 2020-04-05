import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import "./index.css";

function LandingPageBody(){
    const thispagestyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#bbdefb"
    
    };
    return (
        <div>
             <div className = {thispagestyle}>
                <button type="button" className="btn btn-primary">Login</button>
                <button type="button" className="btn btn-light">Register</button>
            </div>
        </div>
    );
}

export default LandingPageBody;