import React, { useState, useEffect } from 'react'
import "../styles/Vendor.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
function Application() {
    const navigate = useNavigate();
    let firstName = "";
    let lastName = "";
    let email = "";
    if (!localStorage.getItem('token')) {
        navigate("/login");
    }
    else {
        const user = JSON.parse(localStorage.getItem('token'));
        firstName = user.givenName;
        lastName = user.familyName;
        email = user.email;
    }

    const queryParams = new URLSearchParams(window.location.search)
    const productId = queryParams.get("ProductId");
    const [productDetail, setProductdetail] = useState([]);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });
    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = "/api/Product/" + productId;
        axios.get(apiUrl).then((repos) => {
            const allRepos = repos.data;
            setAppState({ loading: false, repos: allRepos });
            setProductdetail(allRepos);
        });
    }, [setAppState]);

    return (
        <div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <div className="event-img">
                                    <img src="https://marketplace-assets-production.s3-us-west-2.amazonaws.com/vault/items/preview-56dc384b-9114-4362-a2c0-78a20a140b32-588CS.jpg" />
                                </div>
                                <form id="contact-form"
                                    method="POST">
                                    <div className="form-group">
                                        <div className="row featureTitle" >
                                            <div className="col-md-12">
                                                <h5>Application Detail</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="firstname">First Name</label>
                                                <input id="firstname" type="text"
                                                    className="form-control" required value={firstName}
                                                />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="lastname">Last Name</label>
                                                <input id="lastname" type="text"
                                                    className="form-control"
                                                    required value={lastName} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email">Email</label>
                                                <input id="email" type="text"
                                                    className="form-control" required value={email}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label htmlFor="code">Product Code</label>
                                                <input id="code" type="text"
                                                    className="form-control" required value={productDetail.code}
                                                />
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="name">Product Name</label>
                                                <input id="name" type="text"
                                                    className="form-control"
                                                    required value={productDetail.name} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="description">Description</label>
                                                <input id="description" type="text"
                                                    className="form-control" required value={productDetail.description}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="rate">Rate</label>
                                                <input id="rate" type="text"
                                                    className="form-control" required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="term">Term</label>
                                                <input id="term" type="text"
                                                    className="form-control"
                                                    required />
                                            </div>
                                        </div>
                                    </div>
                                    <button id="sub_btn" type="submit" style={{ width: "150px" }}>
                                        <a href="/success"> Submit</a>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Application;
