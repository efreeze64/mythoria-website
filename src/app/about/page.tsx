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
import MaggieModal from "./components/maggie-modal";

import "@/assets/styling/global-style.css";
import "./about.css";

import Oliver from "@/assets/img/people/3P5A5793.jpg";
import Daniel from "@/assets/img/people/3P5A5998 (1).jpg";
import Elias from "@/assets/img/people/3P5A5731.jpg";
import Chris from "@/assets/img/people/3P5A5739.jpg";
import Robbie from "@/assets/img/people/3P5A5755n.jpg";
import Maggie from "@/assets/img/people/Maggie.png";

import Band1 from "@/assets/img/band/band_1.jpg";
import Band2 from "@/assets/img/band/3P5A5537.jpg";
import Band3 from "@/assets/img/band/band_3.jpg";
import Band4 from "@/assets/img/band/3P5A5685.jpg";
import Band5 from "@/assets/img/band/407234443_282583834781360_4192162774134715309_n.jpg";
import Band6 from "@/assets/img/band/462562780_1963414594171154_2170130432183473856_n.jpg";
import Band7 from "@/assets/img/band/53272733825_a5cfb3017c_k.jpg";
import Band8 from "@/assets/img/band/53272736835_ef1d0177d3_o.jpg";
import Band9 from "@/assets/img/band/All.jpg";

const About = () => {
  const [chrisModal, setChrisModal] = useState(false);
  const [danielModal, setDanielModal] = useState(false);
  const [eliasModal, setEliasModal] = useState(false);
  const [oliverModal, setOliverModal] = useState(false);
  const [robbieModal, setRobbieModal] = useState(false);
  const [maggieModal, setMaggieModal] = useState(false);

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

  const openMaggieModal = () => setMaggieModal(true);
  const closeMaggieModal = () => setMaggieModal(false);

  const photos = [
    Band1.src,
    Band2.src,
    Band3.src,
    Band4.src,
    Band5.src,
    Band6.src,
    Band7.src,
    Band8.src,
    Band9.src,
  ];

  return (
    <body>
      <Navbar />
      <div className="center-wrapper">
        <h1>About Page</h1>
        <div className="container" id="text-column">
          <p>
            Mythoria is a metal band formed west of Copenhagen. Consisting of
            two sets of brothers by blood and a brother by heart, Mythoria is
            more than just a band—it’s a family bonded by music and spirit.
            Together, they deliver powerful riffs, melodic hooks, and
            high-energy performances that promise an unforgettable experience.
            <br />
            <br />
            Mythoria has crafted a modern hybrid sound, blending the intensity
            of power metal with the depth of melodic death metal. Catchy hooks
            and impactful vocals give Mythoria’s music a unique edge, leaving
            listeners with a sense of familiarity that feels fresh with every
            listen.
          </p>
        </div>

        <h1>Members</h1>
        <div className="container" id="picture">
          <div className="picture" onClick={openChrisModal}>
            <img src={Chris.src} alt="" />
            <p>Chris Rosendorf</p>
          </div>
          <div className="picture" onClick={openDanielModal}>
            <img src={Daniel.src} alt="" />
            <p>Daniel Friis</p>
          </div>
          <div className="picture" onClick={openEliasModal}>
            <img src={Elias.src} alt="" />
            <p>Elias Friis</p>
          </div>
          <div className="picture" onClick={openOliverModal}>
            <img src={Oliver.src} alt="" />
            <p>Oliver Christensen</p>
          </div>
          <div className="picture" onClick={openRobbieModal}>
            <img src={Robbie.src} alt="" />
            <p>Robbie Rosendorf</p>
          </div>
          <div className="picture" onClick={openMaggieModal}>
            <img src={Maggie.src} alt="" />
            <p>Maggie</p>
          </div>
        </div>
        <ChrisModal isOpen={chrisModal} onClose={closeChrisModal} />
        <DanielModal isOpen={danielModal} onClose={closeDanielModal} />
        <EliasModal isOpen={eliasModal} onClose={closeEliasModal} />
        <OliverModal isOpen={oliverModal} onClose={closeOliverModal} />
        <RobbieModal isOpen={robbieModal} onClose={closeRobbieModal} />
        <MaggieModal isOpen={maggieModal} onClose={closeMaggieModal} />
        <div className="spacing"></div>
        <ImageGallery photos={photos} />
        <div className="spacing"></div>
      </div>
      <Footer />
    </body>
  );
};

export default About;
