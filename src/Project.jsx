import React from "react";
import data from "./ProjData";
import ProjComp from "./ProjComp";

export default function Project() {
  return (
    <>
      <section>
        <h1 className="text-center my-3">My Projects</h1>
        <div className="container d-flex flex-wrap my-5 justify-content-center gap-5">
          {data.map((ele, index) => {
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
