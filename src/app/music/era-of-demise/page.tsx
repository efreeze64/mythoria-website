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
        <body>
            <Navbar />
                <div className="center-wrapper">
                        <h1>Era of Demise</h1>
                    <div className="container" id="upper">
                        <img src={Era.src} alt="Era of Demise Cover"/>
                        <div id="text">
                            <ul className="row">
                                <li>RELEASED: 24-11-2023</li>
                                <li>TYPE: EP (DEMO)</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique, ex a sodales fermentum, purus nulla feugiat justo, sed blandit nunc lacus vel lorem. Integer sit amet orci sem. Ut lacinia vestibulum lacus non volutpat. Donec ut aliquet purus. Sed vehicula, libero non pretium maximus, sapien ex dignissim lorem, ut tristique ipsum erat non mauris.
Nullam quis nunc vehicula, sodales felis vitae,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique, ex a sodales fermentum, purus nulla feugiat justo, sed blandit nunc lacus vel lorem. Integer sit amet orci sem. Ut lacinia vestibulum lacus non volutpat. Donec ut aliquet purus. Sed vehicula, libero non pretium maximus, sapien ex dignissim lorem, ut tristique ipsum erat non mauris.
Nullam quis nunc vehicula, sodales felis vitae, fermentum nunc. Phasellus rhoncus, velit nec convallis dignissim, elit odio cursus arcu, et malesuada enim metus non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vitae scelerisque mauris. Quisque congue sapien sit amet velit convallis tincidunt.
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
        </body>
    )
}

export default EraOfDemise;