import React from "react";
import "./modal.css";

import Chris from "@/assets/img/Kopi af 3P5A5763.jpg";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={Chris.src} alt="Modal Header" className="modal-img" />
        <div className="modal-content">
          <div className="row" id="1">
            <p>Chris Rosendorf | Age: 30 | Birthday</p>
          </div>
          <div className="row" id="2">
            <p>
              Elias is a multi-talented musician and the dynamic drummer of the
              band, bringing rhythm and energy to every performance. Beyond the
              drums, he’s skilled on guitar and bass, often crafting the band’s
              instrumentals with his versatile musicality. Recently, Elias has
              dived into the world of mixing and mastering, expanding his
              creative reach and refining the band’s sound from the studio to
              the stage. His passion for music shines through in every beat and
              melody he creates.
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
