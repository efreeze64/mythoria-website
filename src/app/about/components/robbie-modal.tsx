import React from "react";
import "./modal.css";

import Robbie from "@/assets/img/people/Robbie.jpg";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={Robbie.src} alt="Modal Header" className="modal-img" />
        <div className="modal-content">
          <div className="row" id="1">
            <p>Robbie Rosendorf | Age: 25 | Birthday</p>
          </div>
          <div className="row" id="2">
            <p>
              Robbie “ЯBY” Rosendorf is the lead guitarist of the band and
              Daniel’s boxing pillow. Don’t let his looks fool you. Underneath
              the sweet smiling surface, there’s a crowd surfing, guitar
              shredding powerhouse of energy. Robbie is a hard working fella
              with many amazing talents that he utilizes. When his mind settles
              on something, his many talents come into play, and all his
              creations are made with love and passion.
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
