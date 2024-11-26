"use client";

import React, { useState } from "react";

import "@/assets/styling/global-style.css";
import "./calender.css";

import Footer from "@/assets/components/footer";
import Navbar from "@/assets/components/navbar";

import CryingEmoji from "@/assets/img/dregun_crying.png";

const Calender = () => {
  const list = [];

  return (
    <body>
      <Navbar />
      <div className="center-wrapper">
        <h1>Concerts</h1>
        {list.length > 0 ? (
          <div className="container"></div>
        ) : (
          <div className="container" id="empty">
            <p>There are no upcoming concerts</p>
            <img src={CryingEmoji.src} alt="crying dragon" />
            <div className="spacing"></div>
          </div>
        )}
      </div>
      <Footer />
    </body>
  );
};

export default Calender;
