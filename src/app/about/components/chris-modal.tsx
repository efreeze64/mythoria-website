import React from "react";
import "./modal.css";

import Chris from "@/assets/img/people/Chris.jpg";

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
              The oldest and wisest member of the group. Don’t let that fool you
              though. Deep inside Chris’ heart, lurks the classic 2000’s goofy
              metal boy. On stage he’ll give 110% power through his guitar and
              backup vocals. With his mighty beard, he sets a great look and
              soul the stage. When everything comes together - Chris is a
              kindhearted wizard with a guitar as his magical weapon.
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
