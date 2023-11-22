import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import logo_twist from "../assets/logo_twist.png";
import ntwist_logo_dark from "../assets/ntwist-logo-dark.png";
import SearchPage from "./SearchPage";

function Navbar() {
  const [navColor, setnavColor] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [opensearchtab, SetOpensearch] = useState(false);
  const moreInfoRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(true);
  };
  const closetoggleContent = () => {
    setShowContent(false);
  };

  const listenScrollEvent = () => {
    if (window.scrollY > 50) {
      setnavColor(true);
    } else {
      setnavColor(false);
    }
  };
  const openMoreInfo = () => {
    setShowMoreInfo(true);
  };

  const closeMoreInfo = () => {
    setShowMoreInfo(false);
  };

  const openeSearch = () => {
    SetOpensearch(true);
  };
  const closeSearch = () => {
    SetOpensearch(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".Navbar");
    if (this.scrollY >= 80) header.classList.add("navbar_color");
    else header.classList.remove("navbar_color");
  });

  return (
    <>
      <div id="Navbar" className="Navbar">
        <div className="nav-logo">
          {!navColor ? (
            <img height={"50px"} src={logo_twist} alt="" />
          ) : (
            <img height={"50px"} src={ntwist_logo_dark} alt="" />
          )}
        </div>
        <div className={`content ${showContent ? "show-content" : "hide-content"}`}>
          <div className="top">
            <div>
            <img height={"60px"} src={ntwist_logo_dark } alt="" />
            </div>
          <div>
            <div>
            <i
            onClick={closetoggleContent}
            style={{ color: "black" }}
            class="fa-solid fa-xmark"
          ></i>
            </div>
          </div>
          </div>
          <ul>
            <li className={`content_li ${navColor ? "font_change" : ""}`}>
              HOME
            </li>
            <li
              className={`content_li dropdown ${navColor ? "font_change" : ""}`}
            >
              INDUSTRIES{" "}
              <i class="fa-solid fa-angle-down" onMouseEnter={openMoreInfo}></i>
            </li>
            <li className={`content_li ${navColor ? "font_change" : ""}`}>
              AI SOFTWARE
            </li>
            <li className={`content_li ${navColor ? "font_change" : ""}`}>
              BLOG
            </li>
            <li className={`content_li ${navColor ? "font_change" : ""}`}>
              CONTACT US
            </li>
          </ul>
          <div
            class="dropdown_data"
            ref={moreInfoRef}
            style={{ display: showMoreInfo ? "block" : "none" }}
            onMouseLeave={closeMoreInfo}
          >
            <div className="dropdown_data_list">
              <a href="">Sustainability</a>
              <a href="">Mineral processing</a>
              <a href="">Mine-To-Mill-To-Mine Optimization</a>
              <a href="">Oil & Gas</a>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <div className="magnify">
            <i onClick={openeSearch} class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="menu" onClick={toggleContent}>
            <i class="fa-solid fa-bars-staggered"></i>
          </div>
        </div>
      </div>
      {opensearchtab && <SearchPage onClose={closeSearch} />}
    </>
  );
}

export default Navbar;
