import React, { useState, useEffect } from 'react'
import axios from "axios";
import "../styles/Vendor.css";
import { Link } from "react-router-dom";
import useCollapse from 'react-collapsed';
import moment from "moment";

function Section(props) {
  const config = {
    defaultExpanded: props.defaultExpanded || false,
    collapsedHeight: props.collapsedHeight || 0
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
  return (
    <div className='row top20'>
      <div className='col-md-12'>
        <div className="collapsible">
          <div className="header collapsibleTitle" {...getToggleProps()}>
            <div className="title"><h5>{props.title}</h5></div>
            <div className="icon">
              <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
            </div>
          </div>
          <div {...getCollapseProps()}>
            <div className="content">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Vendor() {
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
                        <h5>Product Detail</h5>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <label htmlFor="code">Code</label>
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
                      <div className="col-md-3">
                        <label htmlFor="description">Description</label>
                        <input id="description" type="text"
                          className="form-control" required value={productDetail.description}
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="productname">Product Name</label>
                        <input id="productname" type="text"
                          className="form-control"
                          required value={productDetail.code} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <label htmlFor="initialRate">Initial Rate</label>
                        <input id="initialRate" type="text"
                          className="form-control" required value={productDetail.initialRate}
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="subsequentRate">Subsequent Rate</label>
                        <input id="subsequentRate" type="text"
                          className="form-control"
                          required value={productDetail.subsequentRate} />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="interestOnlyAmount">Interest Only Amount</label>
                        <input id="interestOnlyAmount" type="text"
                          className="form-control" required value={productDetail.interestOnlyAmount}
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="totalTermMonths">Total Term (Months)</label>
                        <input id="totalTermMonths" type="text"
                          className="form-control"
                          required value={productDetail.totalTermMonths} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-3">
                        <label htmlFor="monthlyPayment">Monthly Payment</label>
                        <input id="monthlyPayment" type="text"
                          className="form-control" required value={productDetail.monthlyPayment}
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="apr">Apr</label>
                        <input id="apr" type="text"
                          className="form-control"
                          required value={productDetail.apr} />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="totalAmountPayableDuringErcPeriod">Amount Payable During Erc</label>
                        <input id="totalAmountPayableDuringErcPeriod" type="text"
                          className="form-control" required value={productDetail.totalAmountPayableDuringErcPeriod}
                        />
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="totalAmountPayable">Total Amount Payable in (<span>&#163;</span>)</label>
                        <input id="totalAmountPayable" type="text"
                          className="form-control"
                          required value={productDetail.totalAmountPayable} />
                      </div>
                    </div>

                    <div className="preferences">
                      <Section title="Product Fees" >
                        <table className="table" >
                          <tbody>
                            <tr>
                              <th>No.</th>
                              <th>Fee Type</th>
                              <th>Fee Amount (<span>&#163;</span>)</th>
                              <th>Fee Description</th>
                            </tr>
                            {productDetail.fees &&
                              productDetail.fees.map((fee, index) => {

                                return (
                                  <tr>
                                    <td>
                                      <div className="row">
                                        <div className="col-md-1">
                                          <label>{index + 1}</label>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <input id="type" type="text"
                                        className="form-control"
                                        required value={fee.type} />
                                    </td>
                                    <td>
                                      <input id="amount" type="text"
                                        className="form-control"
                                        required value={fee.amount} />
                                    </td>
                                    <td>
                                      <input id="description" type="text"
                                        className="form-control" required value={fee.description}
                                      />
                                    </td>
                                  </tr>

                                )
                              })}

                          </tbody>
                        </table>

                      </Section>
                      <Section title="Product Feature" >
                        <table className="table" >
                          <tbody>
                            <tr>
                              <th>No.</th>
                              <th>Feature</th>
                              <th>Description</th>
                              <th>Detail</th>
                            </tr>
                            {productDetail.features &&
                              productDetail.features.map((feature, index) => {

                                return (
                                  <tr>
                                    <td>
                                      <div className="row">
                                        <div className="col-md-1">
                                          <label>{index + 1}</label>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <input id="name" type="text"
                                        className="form-control"
                                        required value={feature.name} />
                                    </td>
                                    <td>
                                      <input id="description" type="text"
                                        className="form-control"
                                        required value={feature.description} />
                                    </td>
                                    <td>
                                      <textarea id="detail" type="text" cols="40" rows="5"
                                        className="form-control top0" required value={feature.longDescription}
                                      />
                                    </td>
                                  </tr>

                                )
                              })}

                          </tbody>
                        </table>
                      </Section>
                      <Section title="Product Rates">
                        <table className="table" >
                          <tbody>
                            <tr>
                              <th>No.</th>
                              <th>Type</th>
                              <th>Rate %</th>
                              <th>Term</th>
                              <th>Cap</th>
                              <th>Collar</th>
                            </tr>
                            {productDetail.rates &&
                              productDetail.rates.map((rate, index) => {

                                return (
                                  <tr>
                                    <td>
                                      <div className="row">
                                        <div className="col-md-1">
                                          <label>{index + 1}</label>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <input id="type" type="text"
                                        className="form-control"
                                        required value={rate.type} />
                                    </td>
                                    <td>
                                      <input id="rate" type="text"
                                        className="form-control"
                                        required value={rate.rate} />
                                    </td>
                                    <td>
                                      <input id="term" type="text"
                                        className="form-control"
                                        required value={rate.term} />
                                    </td>
                                    <td>
                                      <input id="cap" type="text"
                                        className="form-control"
                                        required value={rate.cap} />
                                    </td>
                                    <td>
                                      <input id="collar" type="text"
                                        className="form-control"
                                        required value={rate.collar} />
                                    </td>
                                  </tr>

                                )
                              })}

                          </tbody>
                        </table>
                      </Section>
                      <Section title="Product ERCS" >
                        <table className="table" >
                          <tbody>
                            <tr>
                              <th>No.</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                              <th>Percentage</th>
                              <th>Amount in (<span>&#163;</span>)</th>
                            </tr>
                            {productDetail.ercs &&
                              productDetail.ercs.map((ercs, index) => {
                                let startDate = moment(ercs.startDate).utc().format('DD/MM/YYYY')
                                let endDate = moment(ercs.endDate).utc().format('DD/MM/YYYY')
                                return (

                                  <tr>
                                    <td>
                                      <div className="row">
                                        <div className="col-md-1">
                                          <label>{index + 1}</label>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <input id="startDate" type="text"
                                        className="form-control"
                                        required value={startDate} />
                                    </td>
                                    <td>
                                      <input id="endDate" type="text"
                                        className="form-control"
                                        required value={endDate} />
                                    </td>
                                    <td>
                                      <input id="percentage" type="text"
                                        className="form-control"
                                        required value={ercs.percentage} />
                                    </td>
                                    <td>
                                      <input id="amount" type="text"
                                        className="form-control"
                                        required value={ercs.amount} />
                                    </td>
                                  </tr>

                                )
                              })}

                          </tbody>
                        </table>
                      </Section>
                    </div>

                  </div>

                  <Link to={`/Application?ProductId=${productId}`}>
                    <button > Proceed</button>
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
