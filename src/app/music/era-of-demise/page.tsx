"use client";

import React from "react";
import Link from "next/link";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";

import "@/assets/styling/global-style.css";
import "./era-of-demise.css";

import Era from "@/assets/img/Era of Demise.png";

const EraOfDemise = () => {
  return (
    <>
      <Navbar />
      <div className="center-wrapper">
        <h1>Era of Demise</h1>
        <div className="container" id="upper">
          <img src={Era.src} alt="Era of Demise Cover" />
          <div id="text">
            <ul className="row">
              <li>RELEASED: 24-11-2023</li>
              <li>TYPE: EP (DEMO)</li>
            </ul>
            <p>
              Era of Demise is an EP consisting of 3 songs. Recorded in the
              short span of just 3 days, Era of Demise marks the beginning of
              Mythoria’s journey in the world of heavy metal. The EP’s songs are
              some of the first songs written by Elias and Daniel, and holds a
              special place in their hearts as a reminder of where it all began.
            </p>
          </div>
        </div>
        <h1>Tracks</h1>
        <div className="container" id="music">
          <Link href="era-of-demise/through-the-storm">Through the Storm</Link>
          <Link href="era-of-demise/house-of-death">House of Death</Link>
          <Link href="era-of-demise/from-the-shadows">From the Shadows</Link>
        </div>
        <div className="spacing"></div>
      </div>
      <Footer />
    </>
  );
};

export default EraOfDemise;
