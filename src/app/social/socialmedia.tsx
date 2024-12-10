"use client";
import React from "react";

import "./socialmedia.css";
import OpenLink from "@/assets/img/link.png";
import Link from "next/link";

const SocialMedia = ({ name, link, image, tag }) => {
  return (
    <Link href={link} target="_blank" className="container" id="smaller">
      {/* Left Section */}
      <div className="social" id="left">
        <img src={image.src} alt={`${name} logo`} className="social-logo" />
      </div>

      {/* Middle Section */}
      <div className="social" id="middle">
        <p>{name}</p>
        <p>{tag}</p>
      </div>

      {/* Right Section */}
      <div className="social" id="right">
        <img src={OpenLink.src} alt="Open link" />
      </div>
    </Link>
  );
};

export default SocialMedia;
