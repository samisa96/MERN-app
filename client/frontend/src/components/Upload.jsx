import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import history from "./history";
import axios from "axios";
// import "./index.css";

function Upload(props){
    const uploadingUser = props.location.user;
    const [image, setImage] = React.useState(null); 
    const [productDetails, setProductDeatils] = React.useState({
        productName: "",
        description:"",
        startingBid: "",
        contact: "",
        deadline: ""
    });
    function handleChange(event){
        const {name, value} = event.target;
            setProductDeatils(prevDetails => {
                return ({
                    ...prevDetails,
                    [name]: value
                });
            })
    }
    function handleSubmit(event){
        event.preventDefault();
        setProductDeatils(prevDetails => {
            return {
                ...prevDetails,
                image: image,
                originaluser: uploadingUser.userName 
            };
        });
        axios.post('http://localhost:5000/upload', productDetails);
    }

    function handleImageUpload(event){
        console.log(event.target.files);
        setImage(event.target.files[0]);
    }
    
    return (
        <div>
            <h1> Please upload {uploadingUser.userName}</h1>
            <form onSubmit = {handleSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input name="productName" onChange = {handleChange} type="text" className="form-control" value = {productDetails.productName}placeholder="Enter Product name"/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input name="description" onChange = {handleChange} type="text" className="form-control" value = {productDetails.description}placeholder="Enter Description"/>
                </div>
                <div className="form-group">
                    <label>Starting Bid</label>
                    <input name = "startingBid" onChange = {handleChange} type="number" className="form-control" value = {productDetails.startingBid}placeholder="Enter Starting bid"/>
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input name = "contact" onChange = {handleChange} type="number" className="form-control" value = {productDetails.contact}placeholder="Enter contact number"/>
                </div>
                <div className="form-group">
                    <label>Deadline</label>
                    <input name = "deadline" onChange = {handleChange} type="date" className="form-control"  value = {productDetails.image}placeholder="Enter Deadline date"/>
                </div>
                <input type = "file" onChange = {handleImageUpload}/>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}



export default Upload;