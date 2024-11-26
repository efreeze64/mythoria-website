"use client";

import React, { useState } from "react";

import Navbar from "@/assets/components/navbar";
import Footer from "@/assets/components/footer";
import Lyrics from "@/app/music/era-of-demise/house-of-death/house-lyrics";

import "@/assets/styling/global-style.css";
import "@/assets/styling/song.css";


const HouseOfDeath = () => {

    const [lyrics, setLyrics] = useState(false);

    const OpenLyrics = () => {
        setLyrics(!lyrics);
    }

    return (
        <body>
            <Navbar />
                <div className="center-wrapper">
                    <h1>House of Death</h1>
                    <iframe
                            width="50%"
                            height="500px"
                            src="https://www.youtube.com/embed/SoqEyb6THhY?si=TvWCKqT5GBoziQKY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        >
                    </iframe>
                    <h1>About the song</h1>
                    <div className="container" id="text">
                        <p>From the Shadows is ahout From the Shadows is ahout From the Shadows is ahout From the Shadows is ahout From the Shadows is ahout From the Shadows is ahout From the Shadows is ahout From the Shadows is ahout </p>
                    </div>
                    <h1 className="open-lyrics" onClick={OpenLyrics}>VIEW LYRICS</h1>
                    <div className="container">
                        {lyrics ? <Lyrics /> : <></>}
                    </div>
                    <div className="spacing"></div>
                 
                </div>
            <Footer />
        </body>
    )
}

export default HouseOfDeath;
