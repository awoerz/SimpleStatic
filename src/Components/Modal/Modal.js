import React, {useState, useEffect} from 'react';
import './Modal.css';

export default function Modal({showModal, setShowModal, confirmButton}) {

  const exitModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <>
    { showModal ?
    (<div className="modal-container {showSelf ? show : no-show}">
      <div className="modal fade-in-modal">
        <button onClick={exitModal} id="modal-exit-button">
          X
        </button>
        <div className="modal-message"> 
          Are you sure that you would like to delete the item?
        </div>
        <div className="modal-buttons">
          <button onClick={confirmButton} id="yes-button">
            Yes
          </button>
          <button onClick={exitModal} id="no-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
    ) : 
    <div className="no-show">
      hidden
    </div>
    } 
    </>
  )
}
