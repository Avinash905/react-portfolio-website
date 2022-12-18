import React from "react";
import { useState } from "react";

export default function Contact() {
  const [input, setInput] = useState({
    fullname: "",
    phone: "",
    email: "",
    text: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submitFunc = () => {
    alert(`Hi ${input.fullname} you form has been submitted successfully`);
  };
  return (
    <>
      <section>
        <h2 className="text-center mt-3">Contact Me</h2>
        <form onSubmit={submitFunc}>
          <div className="form-div">
            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Enter your full name"
                  required
                  name="fullname"
                  value={input.fullname}
                  onChange={inputEvent}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Enter your mobile number"
                  required
                  name="phone"
                  value={input.phone}
                  onChange={inputEvent}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="example@xyz.com"
                  required
                  name="email"
                  value={input.email}
                  onChange={inputEvent}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="inputPassword3"
                  rows="4"
                  required
                  name="text"
                  value={input.text}
                  onChange={inputEvent}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
