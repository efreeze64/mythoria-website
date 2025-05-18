"use client";
import React from "react";

import "@/assets/styling/global-style.css";
import "./social.css";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";
import SocialMedia from "./socialmedia";

import facebook from "@/assets/img/Facebook_Logo_Primary.png";
import instagram from "@/assets/img/Instagram_Glyph_Gradient.png";
import x from "@/assets/img/logo-white.png";
import tiktok from "@/assets/img/TikTok_Icon_Black_Circle.png";
import youtube from "@/assets/img/youtube_social_icon_red.png";
import spotify from "@/assets/img/Spotify_Primary_Logo_RGB_Green.png";

const Social = () => {
  return (
    <>
      <Navbar />
      <div className="center-wrapper">
        <h1>Social Media</h1>
        <p>Consider following us on one of our social media platforms</p>
        <div className="list-social">
          <SocialMedia
            name={"Facebook"}
            link={"https://www.facebook.com/mythoriaband"}
            image={facebook}
            tag={"mythoriaband"}
          />
          <SocialMedia
            name={"Instagram"}
            link={"https://www.instagram.com/mythoriaband"}
            image={instagram}
            tag={"mythoriaband"}
          />
          <SocialMedia
            name={"Twitter / X"}
            link={"https://x.com/mythoriaband"}
            image={x}
            tag={"mythoriaband"}
          />
          <SocialMedia
            name={"Tik Tok"}
            link={"https://www.tiktok.com/@mythoriaband"}
            image={tiktok}
            tag={"mythoriaband"}
          />
          <SocialMedia
            name={"YouTube"}
            link={"https://www.youtube.com/@Mythoriaband"}
            image={youtube}
            tag={"@Mythoriaband"}
          />
          <SocialMedia
            name={"Spotify"}
            link={"https://open.spotify.com/artist/6gkSJ4e1ZGlb2PCoSFPJog"}
            image={spotify}
            tag={"Mythoria"}
          />
        </div>
        <div className="spacing"></div>
      </div>
      <Footer />
    </>
  );
};

export default Social;
