import React from "react";
import "../Components/SearchPage.scss";

function SearchPage({ onClose }) {
  return (
    <div className="SearchPage" id="SearchPage">
      <div className="SearchPage-container" id="SearchPage-container">
        <div className="top">
          <i
            onClick={onClose}
            style={{ color: "white" }}
            class="fa-solid fa-xmark"
          ></i>
        </div>
        <div className="search-content">
            <span>

          <input type="text" />
          <i
            className="ico_search"
            style={{ color: "white" }}
            class="fa-solid fa-magnifying-glass"
          ></i>
            </span>
         
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
