import React from "react";
import "./modal.css";

import Daniel from "@/assets/img/people/D2.jpg";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={Daniel.src} alt="Modal Header" className="modal-img" />
        <div className="modal-content">
          <div className="row" id="1">
            <p>Daniel Friis | Age: 29 | Birthday</p>
          </div>
          <div className="row" id="2">
            <p>
              Standing at an impressive height of 1.95 meters, Daniel takes on
              the role of frontman for Mythoria. He is a powerhouse brimming
              with wild and innovative ideas, which fuel his drive to achieve
              his dreams and ambitions. <br /> Imagine a fusion of Jim Carrey’s
              character in “The Mask” and Bam Margera from “Jackass”—that
              perfectly encapsulates Daniel's vibrant mind and boundless energy.
              Self-taught in vocals, Daniel has always excelled at imitating
              cartoon characters, making it a natural progression for him to
              unleash his skills in screaming and growling as a vocalist.
              Interestingly, before he embraced singing, he was a drummer.
            </p>
          </div>
        </div>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
