"use client";

import React, { useState, useEffect, use } from "react";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";

import "./contact.css";
import "@/assets/styling/global-style.css";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const HandleSent = () => {
    setIsSent(true);
  };

  return (
    <>
      <Navbar />
      <div className="center-wrapper">
        <div className="container" id="1">
          <h1>CONTACT</h1>
        </div>
        {!isSent ? (
          <>
            <div className="container" id="2">
              <p className="text">
                (The logic for sending a mail dosen't work yet)
                <br />
                To contact Mythoria, either fill the form below <br /> or
                contact us at: <br />{" "}
                <a href="mailto:band@mythoria.dk" className="highlighted-text">
                  band@mythoria.dk
                </a>
              </p>
            </div>
            <div className="container" id="3">
              <form className="email-form" onSubmit={HandleSent}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea name="message" placeholder="Your message" required />
                <button type="submit">SEND</button>
              </form>
            </div>
          </>
        ) : (
          <div>
            <p className="text">
              Thank your for your message <br />
              We will reply as soon as possible
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
