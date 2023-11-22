import React, { useEffect } from "react";
import "./Home.scss";
import first_pic from "../assets/first_pic.jpg";
import third_pic from "../assets/third_pic.jpg";
import second_pic from "../assets/second_pic.jpg";
import fourt_pic from "../assets/fourt_pic.png";

function Home() {
  
  return (
    <div id="Home" className="Home">
<div className="home-top">
    <div className="top-data">
    <div className="top-data-heading">
          <h1 data-aos="fade-up">
            Data-powered solutions
            <br />
            for Industrial Excellence
          </h1>
          <button>
            Read More
          </button>
        </div>
        <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
    </div>
</div>

      <div  className="home-bottom">
        <div data-aos="fade-up" className="home-bottom-child">
          <div className="home-bottom-child-left">
            <h1>Mine-To-Mill-To-Mine Optimization</h1>
            <p>
              NTWIST’s newest product unlocks up to $250/oz in previously
              inaccessible value in open pit gold mines by connecting siloed
              data sources like block models, fleet management systems,
              stockpile surveys, and plant instruments. This allows your company
              to better track material flow, and feed properties, identify
              plan/production discrepancies, and correct resource models and
              production plans.
            </p>
            <button>Read More</button>
          </div>
          <div className="home-bottom-child-right">
            <img width="100%" src={first_pic} alt="" />
          </div>
        </div>
        <div data-aos="fade-up" className="home-bottom-child">
          <div className="home-bottom-child-right">
            <img width="100%" src={second_pic} alt="" />
          </div>
          <div className="home-bottom-child-left">
            <h1>Sustainability</h1>
            <p>
              <span>
                Environmental stewardship is a priority for NTWIST. We help our
                customers to minimize their sustainability impact on the planet.
                Emissions or environmental targets are used alongside
                productivity targets to define success for our customers.
              </span>
              <span>
                With the increasing relevance of carbon accounting and emissions
                tracking, NTWIST offers a suite of tools to increase visibility
                into environmental performance and help processing plants track,
                manage, optimize, and report key metrics.
              </span>
            </p>
            <button style={{ marginTop: "10px" }}>Read More</button>
          </div>
        </div>
        <div data-aos="fade-up" className="home-bottom-child">
          <div className="home-bottom-child-left">
            <h1>Mineral Processing</h1>
            <p>
              NTWIST offers a number of solutions for mills, concentrators, and
              leach plants. Our solutions help operations to reduce the effect
              of feed variability, avoid downtime and increase peak throughput
              while decreasing energy and reagent consumption.
            </p>
            <button style={{ marginTop: "10px" }}>Read More</button>
          </div>
          <div className="home-bottom-child-right">
            <img width="100%" src={third_pic} alt="" />
          </div>
        </div>
        <div data-aos="fade-up" className="home-bottom-child">
          <div className="home-bottom-child-right">
            <img width="100%" src={fourt_pic} alt="" />
          </div>
          <div className="home-bottom-child-left">
            <h1>Oil & Gas</h1>
            <p>
              <span>
                Environmental stewardship is a priority for NTWIST. We help our
                customers to minimize their sustainability impact on the planet.
                Emissions or environmental targets are used alongside
                productivity targets to define success for our customers.
              </span>
              <span>
                With the increasing relevance of carbon accounting and emissions
                tracking, NTWIST offers a suite of tools to increase visibility
                into environmental performance and help processing plants track,
                manage, optimize, and report key metrics.
              </span>
            </p>
            <button style={{ marginTop: "10px" }}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
