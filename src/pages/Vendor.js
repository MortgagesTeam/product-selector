import React, { useState, useEffect }from 'react'
import VendorImage from "../images/NBSVendorLogo.png";
import axios from "axios";
import "../styles/Vendor.css";
import { Link} from "react-router-dom";
function Vendor() {
    

    const queryParams = new URLSearchParams(window.location.search)
    const productId = queryParams.get("ProductId");
    const [productDetail, setProductdetail]=useState([]);
    const [appState, setAppState] = useState({
      loading: false,
      repos: null,
    });
    
    
    useEffect(() => {
      setAppState({ loading: true });
      const apiUrl = "http://localhost:26582/api/MortgageProduct/"+productId;
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
                                  <img src={VendorImage} />
                              </div>
                                <p>Details of the selected Mortgage Product</p><hr/>
                                <form id="contact-form"  
                                    method="POST">
                                <div className="form-group">
                                <div className="row">
                                <div className="col-md-6">
                                <label htmlFor="vendor">Vendor</label>
                                    <input id="vendor" type="text" 
                                       className="form-control" required value={productDetail.Vendor} 
                                       />
                                </div>
                                <div className="col-md-6">
                                <label htmlFor="productname">Product Name</label>
                                    <input   id="productname" type="text"
                                      className="form-control" 
                                      required value={productDetail.ProductName} />
                                </div>
                                </div>

                                <div className="form-group">
                                <label htmlFor="productdescription">Product Description</label>
                                    <input   id="productdescription" type="text"
                                      className="form-control" required value={productDetail.ProductDescription}
                                      />
                                </div>

                                <div className="row">
                                <div className="col-md-6">
                                <label htmlFor="productprice">Product Price</label>
                                    <input id="productprice" type="text" 
                                       className="form-control" required value={productDetail.ProductPrice} 
                                       />
                                </div>
                                <div className="col-md-6">
                                <label htmlFor="aprc">Aprc %</label>
                                    <input id="aprc" type="text"
                                      className="form-control" 
                                      required value={productDetail.Aprc} />
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-md-6">
                                <label htmlFor="term">Term (In Months)</label>
                                    <input  id="name" type="text" 
                                       className="form-control" required value={productDetail.Term} 
                                       />
                                </div>
                                {/* <div className="col-md-6">
                                <label htmlFor="email">Email</label>
                                    <input placeholder = "Email"  id="email" type="email"
                                      className="form-control" aria-describedby="emailHelp"
                                      required value={productDetail.Aprc} />
                                </div> */}
                                </div>
                                </div>
                                
                                {/* <button type="submit" className="primary-btn submit">Get Dip</button> */}
                                <Link to="/Success">
                                  <button > Get DIP </button>
                                </Link>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            </div>
  )
}

export default Vendor
