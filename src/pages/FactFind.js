import React ,{useState, useEffect} from 'react'
import FactFindImage from "../images/FactFindImage.jpg";
import "../styles/FactFind.css";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@material-ui/core';
import { Link} from "react-router-dom";
import axios from "axios";

function FactFind() {
     const [name, setName]=React.useState('');
     const [term, setTerm]=React.useState('');
     const [products, setProducts]=useState([])

     const fetchData = async () => {
        const response = await axios.get(
          "http://localhost:26582/api/MortgageProduct"
        );
    
        setProducts(response.data);
        if(!openLinks){
            setOpenLinks(!openLinks);
        }
        
      };
     const [openLinks, setOpenLinks]=useState(false);
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
                                        <td><input className='form-control searchField' type="text" placeholder='Enter Motgage value' onChange={(e)=>setName(e.target.value)}/></td>
                                        <td><input className='form-control searchField' type="text" placeholder='Enter Term' onChange={(e)=>setTerm(e.target.value)}/></td>
                                        <td style={{textAlign: "center"}}><button className='btnSearch' onClick={fetchData}>Search</button></td>
                                    </tr>
                                </thead>
                        </table>

                        <div className="about" id={openLinks?"closeResult":"openResult"}>
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
                                {/* <thead>
                                    <tr>
                                        <th className="text-center" scope="col">Date</th>
                                        <th scope="col">Speakers</th>
                                        <th scope="col">Session</th>
                                        <th scope="col">Venue</th>
                                        <th className="text-center" scope="col">Venue</th>
                                    </tr>
                                </thead> */}
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
                                                <img src="https://www.shl.com/assets/logos/logo-nationwide-building-society.png" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="event-wrap">
                                                <h3><a href="#">{product.ProductName}</a></h3>
                                                <div className="meta">
                                                    
                                                    <div className="time">
                                                        <span><b>Vendor:</b> {product.Vendor}</span>
                                                    </div>
                                                    <div className="time">
                                                        <span><b>APRC:</b> {product.Aprc}%</span>
                                                    </div>
                                                    <div className="time">
                                                        <span><b>Term:</b> {product.Term} months</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="r-no">
                                                <span><b>Price:</b>{product.ProductPrice} </span><span>&#163;</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="apply">
                                            <Link to={`/Vendor?ProductId=${index + 1}`}>
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
