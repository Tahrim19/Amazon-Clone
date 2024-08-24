import React from 'react';
import '../css/modal.css'; 

export default function Modal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Are you sure you want to sign out?</h2>
        <div className='modal-buttons'>
          <button onClick={onConfirm}>Yes, Sign Out</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
