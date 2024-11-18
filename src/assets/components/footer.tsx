import React from "react";
import Link from "next/link";

import "./footer.css"
import mythoria from "../img/mythoria.png";
import icon from "../img/Mythoria_icon_white.png";

const Footer = () => {

    return (
        <footer>
            <div className="box">
                <div className="inner-box" id="left">
                    <ul>
                        <li>CONTACT:</li>
                        <li>band@mythoria.dk</li>
                        <li>+45 23 74 60 63</li>
                    </ul>
                </div>
                <div className="inner-box" id="middle-pc"><img src={mythoria.src} className="logo" /></div>
                <div className="inner-box" id="middle-mobile"><img src={icon.src} className="logo" /></div>
                <div className="inner-box" id="right">
                    <ul>
                        <li><Link href="https://www.facebook.com/mythoriaband" target="_blank">FACEBOOK</Link></li>
                        <li><Link href="https://www.instagram.com/mythoriaband" target="_blank">INSTAGRAM</Link></li>
                        <li><Link href="https://x.com/mythoriaband" target="_blank">X / TWITTER</Link></li>
                        <li><Link href="https://www.tiktok.com/@mythoriaband" target="_blank">YOUTUBE</Link></li>
                        <li><Link href="https://www.youtube.com/@Mythoriaband" target="_blank">TIKTOK</Link></li>
                        <li><Link href="https://open.spotify.com/artist/6gkSJ4e1ZGlb2PCoSFPJog?si=0c0aa687f3af4c54&nd=1&dlsi=a27d93c3f46d418b" target="_blank">SPOTIFY</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;