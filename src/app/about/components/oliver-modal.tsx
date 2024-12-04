import React from "react";
import "./modal.css";

import Oliver from "@/assets/img/people/oliver_2.jpg";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={Oliver.src} alt="Modal Header" className="modal-img" />
        <div className="modal-content">
          <div className="row" id="1">
            <p>Oliver Christensen | Age: 19 | Birthday</p>
          </div>
          <div className="row" id="2">
            <p>
              Oliver, Mythoria's bassist and youngest member at 19, radiates an
              energetic presence on stage, captivating audiences with his
              dynamic performance style. With focus on engaging movement, bold
              stances, and strong connection with the crowd and band, Oliver’s
              approach supports Mythoria’s mission to create an unforgettable
              live experience.
              <br /> Having begun his musical journey with acoustic guitar at 9
              and bass at 12, Oliver has grown a lifelong passion for music and
              performance. Alongside his commitment to Mythoria, Oliver is also
              pursuing university studies.
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
