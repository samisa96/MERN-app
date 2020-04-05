import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import history from "./history";
import axios from "axios";
// import "./index.css";

function Upload(props){
    const uploadingUser = props.location.user;
    const [image, setImage] = React.useState({
        // name: "",
        // type: ""
    });
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
        const details = {
            ...productDetails,
            uploadedUser:props.location.user.userName
        }
        const form = new FormData();
        form.append('file', image);
        form.append('productname', productDetails.productName);
        form.append('userName', props.location.user.userName);
        form.append('description', productDetails.description);
        form.append('startingBid', productDetails.startingBid);
        form.append('contact', productDetails.contact);
        form.append('deadline', productDetails.deadline);
        axios.post('http://localhost:5000/upload', form);
    }

    function handleImageUpload(event){
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        // setImage({
        //     name: file.name,
        //     type: file.type
        // })
        setImage(file);
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