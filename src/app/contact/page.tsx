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
                To contact Mythoria, either fill the form below <br /> or
                contact us at: <br />{" "}
                <p className="highlighted-text">band@mythoria.dk</p>
              </p>
            </div>
            <div className="container" id="3">
              <form className="email-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
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
            <p>Thank your for your message</p>
            <p>We will reply as soon as possible</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
