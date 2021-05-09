import React from "react";
import "./style.css";


function headShot(props) {
  return (
    <img className="selfie" src={props.image} />
  );
}

export default headShot;
