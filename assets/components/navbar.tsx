import React from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Tabs */}
      <div className="navbar-tabs">

      <div className="dropdown">
          <button className="dropbtn" >BAND</button>
          <div className="dropdown-content">
            <Link href="/about">ABOUT US</Link>
            <Link href="/option5">FACTS</Link>
            <Link href="/option6">PHOTOS</Link>
          </div>
        </div>
       
        <Link href="/music" className="navbar-tab">MUSIC</Link>        
        <Link href="/calender" className="navbar-tab">CONCERTS</Link>
      </div>

      {/* Logo in the Center */}
      <div className="navbar-logo">
        <Link href="/">
          <img src="../img/mythoria.png" alt="Logo" className="logo-image" />
        </Link>
      </div>

      {/* Right Tabs */}
      <div className="navbar-tabs">
      <div className="dropdown">
          <button className="dropbtn">SOCIAL MEDIA</button>
          <div className="dropdown-content">
            <Link href="https://www.facebook.com/mythoriaband">Facebook</Link>
            <Link href="https://www.instagram.com/mythoriaband">Instagram</Link>
            <Link href="https://x.com/mythoriaband">X / Twitter</Link>
            <Link href="https://www.tiktok.com/@mythoriaband">TikTok</Link>
            <Link href="https://www.youtube.com/@Mythoriaband">YouTube</Link>
            <Link href="https://open.spotify.com/artist/6gkSJ4e1ZGlb2PCoSFPJog?si=0c0aa687f3af4c54&nd=1&dlsi=a27d93c3f46d418b">Spotify</Link>
          </div>
        </div>
        <Link href="https://mythoria.bandcamp.com/" className="navbar-tab">MERCH</Link>
        <Link href="/contact" className="navbar-tab">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
