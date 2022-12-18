import React from "react";
import { NavLink } from "react-router-dom";

export default function Common(props) {
  return (
    <>
      <div className="row d-flex align-items-center justify-content-between my-4 ">
        <div className="col-md-5 text-md-start text-center">
          <h2 className="fs-1">
            {props.title}
            <br /> <span className="hero-name">{props.name}</span>
          </h2>
          <p>{props.content}</p>
          <NavLink
            className="text-decoration-none btn btn-outline-primary rounded-pill"
            to={props.link}
          >
            {props.btn_text}
          </NavLink>
        </div>
        <div className="col-md-5 text-md-end text-center my-4">
          <img src={props.image} alt="hero" className="img-fluid" />
        </div>
      </div>
    </>
  );
}
