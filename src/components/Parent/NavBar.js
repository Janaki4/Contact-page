import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const revealFunc = (event) => {
    setRvl(!rvl);
  };
  const [rvl, setRvl] = useState(false);
  return (
    <div>
      <div className={!rvl ? "ham" : "ham hReveal"} onClick={revealFunc}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={!rvl ? "space" : "space reveal"}>
        <ul class="lists">
          <l class="list">
            <a href="#">Menu</a>
          </l>
          <l class="list">
            <a href="#">Prices</a>
          </l>
          <l class="list">
            <a href="#">Offers</a>
          </l>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
