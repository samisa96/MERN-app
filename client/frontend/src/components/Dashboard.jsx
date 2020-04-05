import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import history from "./history";
// import "./index.css";

function Dashboard(props){
    
    function handleuploadClick(){
        history.push({
            pathname: "/upload",
            user: props.location.data
        });
    }

    return (
        <div>
            <h1> {props.location.data.userName} Welcome to your dashboard </h1>
            <button type="button" className="btn btn-primary" onClick = {handleuploadClick}>Upload a product</button>
            <button type="button" className="btn btn-light">View products</button>

        </div>

    );
}

export default Dashboard;