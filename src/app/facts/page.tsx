"use client";

import React from "react";

import "@/assets/styling/global-style.css";
import "./facts.css";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";

const Facts = () => {
  return (
    <body>
      <Navbar />
      <div className="center-wrapper">
        <h1>Facts</h1>
        <div className="container" id="wrapper">
          <div className="container" id="left">
            <p>
              Mythoria draws inspiration for their history-telling-lyrics from
              mythology, religion, comics and even video games.
            </p>
          </div>
          <div className="container" id="right">
            <p>
              The name "Mythoria" was inspired by various mythological tales and
              legends, reflecting the band's interest in storytelling and epic
              narratives in their music.
            </p>
          </div>
          <div className="container" id="left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tristique, ex a sodales fermentum, purus nulla feugiat justo, sed
              blandit nunc lacus vel lorem. Integer sit amet orci sem. Ut
              lacinia vestibulum lacus non volutpat. Donec ut aliquet purus. Sed
              vehicula, libero non pretium maximus, sapien ex dignissim lorem,
              ut tristique ipsum erat non mauris. Nullam quis nunc vehicula,
              sodales felis vitae,Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent tristique, ex a sodales fermentum, purus
              nulla feugiat justo, sed blandit nunc lacus vel lorem. Integer sit
              amet orci sem. Ut lacinia vestibulum lacus non volutpat. Donec ut
              aliquet purus. Sed vehicula, libero non pretium maximus, sapien ex
              dignissim lorem, ut tristique ipsum erat non mauris. Nullam quis
              nunc vehicula, sodales felis vitae, fermentum nunc. Phasellus
              rhoncus, velit nec convallis dignissim, elit odio cursus arcu, et
              malesuada enim metus non quam. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Morbi vitae scelerisque mauris. Quisque congue sapien sit amet
              velit convallis tincidunt.
            </p>
          </div>
          <div className="container" id="right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              tristique, ex a sodales fermentum, purus nulla feugiat justo, sed
              blandit nunc lacus vel lorem. Integer sit amet orci sem. Ut
              lacinia vestibulum lacus non volutpat. Donec ut aliquet purus. Sed
              vehicula, libero non pretium maximus, sapien ex dignissim lorem,
              ut tristique ipsum erat non mauris. Nullam quis nunc vehicula,
              sodales felis vitae,Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent tristique, ex a sodales fermentum, purus
              nulla feugiat justo, sed blandit nunc lacus vel lorem. Integer sit
              amet orci sem. Ut lacinia vestibulum lacus non volutpat. Donec ut
              aliquet purus. Sed vehicula, libero non pretium maximus, sapien ex
              dignissim lorem, ut tristique ipsum erat non mauris. Nullam quis
              nunc vehicula, sodales felis vitae, fermentum nunc. Phasellus
              rhoncus, velit nec convallis dignissim, elit odio cursus arcu, et
              malesuada enim metus non quam. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Morbi vitae scelerisque mauris. Quisque congue sapien sit amet
              velit convallis tincidunt.
            </p>
          </div>
        </div>

        <div className="spacing"></div>
      </div>

      <Footer />
    </body>
  );
};

export default Facts;
