import React, { useState } from "react";
import data from "./ProjData";
import ProjComp from "./ProjComp";

export default function Project() {
  const [proj, setProj] = useState(data);
  const filterItems = (category) => {
    const item = data.filter((ele) => {
      return ele.category === category;
    });
    setProj(item);
  };

  return (
    <>
      <section>
        <h1 className="text-center my-3">My Projects</h1>
        <div className="buttons text-center mt-4">
          <button
            className="btn btn-outline-info mx-2"
            onClick={() => {
              setProj(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-info mx-2"
            onClick={() => {
              filterItems("fullstack");
            }}
          >
            Full Stack
          </button>
          <button
            className="btn btn-outline-info mx-2"
            onClick={() => {
              filterItems("frontend");
            }}
          >
            Frontend
          </button>
          <button
            className="btn btn-outline-info mx-2"
            onClick={() => {
              filterItems("datascience");
            }}
          >
            Data Science
          </button>
        </div>
        <div className="container d-flex flex-wrap my-5 justify-content-center gap-5">
          {proj.map((ele, index) => {
            return (
              <ProjComp
                key={index}
                poster={ele.poster}
                title={ele.title}
                desc={ele.desc}
                link={ele.link}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
