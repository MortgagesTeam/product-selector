import React, { useState, useEffect } from 'react'
import FactFindImage from "../images/FactFindImage.jpg";
import "../styles/FactFind.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FactFind() {
    const [name, setName] = React.useState('');
    const [term, setTerm] = React.useState('');
    const [products, setProducts] = useState([])
    const navigate = useNavigate();

    if (!localStorage.getItem('token')) {
        navigate("/login");
    }

   
    const fetchData = async () => {
        const response = await axios.get(
            //    "http://localhost:26582/api/MortgageProduct"
            "/api/Product"
        );

        setProducts(response.data);
        if (!openLinks) {
            setOpenLinks(!openLinks);
        }

    };
    const [openLinks, setOpenLinks] = useState(false);
    return (

        <div className="event-schedule-area-two bg-color pad100">
            <div className="container">
                <div className="row">

                </div>
                <div className="row">
                    <div className="col-lg-12">

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade active show" id="home" role="tabpanel">
                                <div className="table-responsive">

                                    <table className="table searchtable">
                                        <thead>
                                            <tr>
                                                <td><input className='form-control searchField' type="text" placeholder='Enter Motgage value' onChange={(e) => setName(e.target.value)} /></td>
                                                <td><input className='form-control searchField' type="text" placeholder='Enter Term' onChange={(e) => setTerm(e.target.value)} /></td>
                                                <td style={{ textAlign: "center" }}><button className='btnSearch' onClick={fetchData}>Search</button></td>
                                            </tr>
                                        </thead>
                                    </table>

                                    <div className="about" id={openLinks ? "closeResult" : "openResult"}>
                                        <div
                                            className="aboutTop"
                                            style={{ backgroundImage: `url(${FactFindImage})` }}
                                        ></div>
                                        <div className="aboutBottom">

                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                                mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                                                voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                                                fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                                                accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
                                                molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                                                officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
                                                nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
                                                error repudiandae fuga? Ipsa laudantium molestias eos sapiente
                                                officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                                recusandae alias error harum maxime adipisci amet laborum.
                                                Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
                                                cumque velit
                                            </p>
                                        </div>
                                    </div>

                                    <table className="table" >
                                        
                                        <tbody>

                                            {products &&
                                                products.map((product, index) => {

                                                    return (

                                                        <tr className="inner-box" key={index}>
                                                            <th scope="row">
                                                                <div className="event-date">
                                                                    <span>{index + 1}</span>
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <div className="event-img">
                                                                    <img src="https://marketplace-assets-production.s3-us-west-2.amazonaws.com/vault/items/preview-56dc384b-9114-4362-a2c0-78a20a140b32-588CS.jpg" alt="" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="event-wrap">
                                                                    <h3><a href="#">{product.code}</a></h3>
                                                                    <div className="meta">

                                                                        <div className="time">
                                                                            <span><b>Product Name:</b> {product.name}</span>
                                                                        </div>
                                                                        <div className="time">
                                                                            <span><b>Description:</b> {product.description}</span>
                                                                        </div>
                                                                        <div className="time">
                                                                            <span><b>Type:</b> {product.type}</span>
                                                                        </div>
                                                                        <div className="time">
                                                                            <span><b>Term:</b> {product.mortgageTerm}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="r-no">
                                                                    <span><b>Total Amount Payable:</b>{product.totalAmountPayable} </span><span>&#163;</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="apply">
                                                                    <Link to={`/Vendor?ProductId=${product.productId}`}>
                                                                        <button > APPLY NOW </button>
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    );
                                                })}


                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FactFind
