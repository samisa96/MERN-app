import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./nav";
import Footer from "./footer";
import history from "./history";

function Home(){
    return (
        <div>
            <Navbar/>
                <button type="button" className="btn btn-primary" onClick = {() => history.push('/login')}>Login</button>
                <button type="button" className="btn btn-light" onClick = {() => history.push('/register')}>Register</button>
            <Footer />
        </div>
    );


}


export default Home;