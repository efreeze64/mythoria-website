import React from "react";
import "./modal.css";

import Elias from "@/assets/img/people/53272549683_866e26ad3c_k.jpg";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={Elias.src} alt="Modal Header" className="modal-img" />
        <div className="modal-content">
          <div className="row" id="1">
            <p>Elias Friis | Age: 23</p>
          </div>
          <div className="row" id="2">
            <p>
              Drummer, songwriter and Mythorias very own “blond elf from a
              certain fantasy franchise”. Elias takes the title as the
              mastermind behind the instrumentals in Mythoria’s songs. Fate of
              My Kind is mixed and composed by himself as the beginning of his
              newfound power in “music production”, and he spends hours fiddling
              with switches and knobs, to find the right sound for the right
              track. How can this guy keep up with mixing for hours? - it’s
              quite simple. Elias has grown a passion for coffee.
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
