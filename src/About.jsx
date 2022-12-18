import React from "react";
import Common from "./Common";

export default function About() {
  return (
    <>
      <section className="my-auto h-100">
        <div className="container">
          {
            <Common
              title={"Hi there, I am "}
              content={
                "2+ years of experience in Web Development. My mission is to design and develop website that you and your audience love."
              }
              name="Avinash"
              btn_text={"Have Questions?"}
              link={"/contact"}
              image={
                "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=350&dpr=1"
              }
            />
          }
        </div>
      </section>
    </>
  );
}
