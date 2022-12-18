import React from "react";

export default function ProjComp(props) {
  return (
    <>
      <div className="card" style={{ width: "25rem" }}>
        <img src={props.poster} className="card-img-top" alt="poster" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <a
            href={props.link}
            target="blank"
            className="btn btn-outline-primary"
          >
            Project link
          </a>
        </div>
      </div>
    </>
  );
}
