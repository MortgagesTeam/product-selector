import React from "react";
import { Link} from "react-router-dom";
import BannerImage from "../images/HomeBanner.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer" >
        <h1> Mortgage Money Control </h1>
        <p> Select suitable motgage products</p>
        <Link to="/FactFind">
          <button > APPLY NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
