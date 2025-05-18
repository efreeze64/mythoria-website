import React from "react";
import "./modal.css";

import Maggie from "@/assets/img/people/Maggie_again.png";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={Maggie.src} alt="Modal Header" className="modal-img" />
        <div className="modal-content">
          <div className="row" id="1">
            <p>Maggie ??? | Age: 24</p>
          </div>
          <div className="row" id="2">
            <p>Udfyld mig pls</p>
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
