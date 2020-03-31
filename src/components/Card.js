import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="card col-10 col-md-6 d-flex justify-content-center flex-column">
      {props.children}
    </div>
  );
}
