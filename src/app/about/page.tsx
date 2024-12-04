"use client";

import React, { useState } from "react";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";
import ImageGallery from "@/assets/components/image-gallery";
import ChrisModal from "./components/chris-modal";
import DanielModal from "./components/daniel-modal";
import EliasModal from "./components/elias-modal";
import OliverModal from "./components/oliver-modal";
import RobbieModal from "./components/robbie-modal";

import "@/assets/styling/global-style.css";
import "./about.css";

import Oliver from "@/assets/img/people/oliver_2.jpg";
import Daniel from "@/assets/img/Kopi af 3P5A5763.jpg";
import Band1 from "@/assets/img/band/band_1.jpg";
//import Band2 from "";
import Band3 from "@/assets/img/band/band_3.jpg";

const About = () => {
  const [chrisModal, setChrisModal] = useState(false);
  const [danielModal, setDanielModal] = useState(false);
  const [eliasModal, setEliasModal] = useState(false);
  const [oliverModal, setOliverModal] = useState(false);
  const [robbieModal, setRobbieModal] = useState(false);

  const openChrisModal = () => setChrisModal(true);
  const closeChrisModal = () => setChrisModal(false);

  const openDanielModal = () => setDanielModal(true);
  const closeDanielModal = () => setDanielModal(false);

  const openEliasModal = () => setEliasModal(true);
  const closeEliasModal = () => setEliasModal(false);

  const openOliverModal = () => setOliverModal(true);
  const closeOliverModal = () => setOliverModal(false);

  const openRobbieModal = () => setRobbieModal(true);
  const closeRobbieModal = () => setRobbieModal(false);

  const photos = [Band1.src, Band3.src];

  return (
    <body>
      <Navbar />
      <div className="center-wrapper">
        <h1>About Page</h1>
        <div className="container" id="text-column">
          <p>
            Mythoria is a metal band formed west of Copenhagen. The five guys
            strive to deliver an amazing and memorable sound, with their
            headbanging riffs, melodic hooks and their energetic performance.{" "}
            <br /> <br />
            Mythoria combines elements of many different metal genres, but still
            manages to keep a memorable sound. Everything from power metal to
            metalcore have inspired the sound of the band.
            <br /> <br />
            The band released their first demo EP in November 2023. The EP
            recorded during the short span of three days, and features three
            songs. The EP is named ‘Era of Demise’. The EP marks the beginning
            of Mythorias quest for metal. With a library of plenty songs for a
            full-length album, the band have tons of material to deliver a
            memorable show. There might be some more releases in the nearby
            future.
          </p>
        </div>

        <h1>Members</h1>
        <div className="container" id="picture">
          <div className="picture" onClick={openChrisModal}>
            <img src={Daniel.src} alt="" />
            <p>Chris Rosendorf</p>
          </div>
          <div className="picture" onClick={openDanielModal}>
            <img src={Daniel.src} alt="" />
            <p>Daniel Friis</p>
          </div>
          <div className="picture" onClick={openEliasModal}>
            <img src={Daniel.src} alt="" />
            <p>Elias Friis</p>
          </div>
          <div className="picture" onClick={openOliverModal}>
            <img src={Oliver.src} alt="" />
            <p>Oliver Christensen</p>
          </div>
          <div className="picture" onClick={openRobbieModal}>
            <img src={Daniel.src} alt="" />
            <p>Robbie Rosendorf</p>
          </div>
        </div>
        <ChrisModal isOpen={chrisModal} onClose={closeChrisModal} />
        <DanielModal isOpen={danielModal} onClose={closeDanielModal} />
        <EliasModal isOpen={eliasModal} onClose={closeEliasModal} />
        <OliverModal isOpen={oliverModal} onClose={closeOliverModal} />
        <RobbieModal isOpen={robbieModal} onClose={closeRobbieModal} />
        <div className="spacing"></div>
        <ImageGallery photos={photos} />
        <div className="spacing"></div>
      </div>
      <Footer />
    </body>
  );
};

export default About;
