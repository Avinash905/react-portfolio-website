import React from "react";
import Common from "./Common";

export default function Home() {
  return (
    <>
      <section className="my-auto h-100">
        <div className="container">
          {
            <Common
              title={"Grow your business with "}
              content={
                "Where you put your money matters. We create high performing wesites to our client."
              }
              name="ZenAvi"
              btn_text={"Work with me"}
              link={"/contact"}
              image={
                "https://images.pexels.com/photos/13260076/pexels-photo-13260076.jpeg?auto=compress&cs=tinysrgb&w=500&h=550&dpr=1"
              }
            />
          }
        </div>
      </section>
    </>
  );
}
