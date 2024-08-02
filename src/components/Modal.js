// Modal.js
import React from 'react';
import './Modal.css'; 

const Modal = ({ skill, onClose }) => {
  if (!skill) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
      </div>
    </div>
  );
};

export default Modal;
