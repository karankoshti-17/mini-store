import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <>
      <div className="main-loadBody">
        <div class="lds-hourglass"></div>
        <h3>Loading</h3>
      </div>
    </>
  );
}

export default Loader;
