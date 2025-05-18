"use client";
import React from "react";

import "@/assets/styling/global-style.css";
import "./photo.css";

import Logo from "@/assets/img/Mythoria_icon_white.png";
import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";

const Photo = () => {
  return (
    <>
      <Navbar />
      <div className="center-wrapper">
        <h1>Photos</h1>
        <p>This page is under construction</p>
        <img src={Logo.src} />
        <div className="spacing"></div>
      </div>
      <Footer />
    </>
  );
};

export default Photo;
