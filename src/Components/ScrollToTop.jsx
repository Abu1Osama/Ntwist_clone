import React from "react";
import "../Components/ScrollToTop.scss";

function ScrollToTop() {
  window.addEventListener("scroll", function () {
    const Arrow_up = document.querySelector(".ScrollToTop");
    if (this.scrollY >= 560) Arrow_up.classList.add("ScrollToTop_display");
    else Arrow_up.classList.remove("ScrollToTop_display");
  });

  return (
    <div className="ScrollToTop">
      <a href="#">
        <div className="MoveToTop_button">
          <i class="fa-solid fa-angle-up"></i>
        </div>
      </a>
    </div>
  );
}

export default ScrollToTop;
