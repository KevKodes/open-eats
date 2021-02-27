import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SearchComponent from '../SearchComponent';
// import '../SearchComponent/SearchComponent.css'

export default function SearchButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button 
        className="search-image"
        onClick={() => setShowModal(true)}
      >
        <i className="fas fa-search"></i>
      </button>
      {showModal && (
        <Modal 
          onClose={() => setShowModal(false)}
          className="search-button-modal"
        >
          <SearchComponent />
        </Modal>
      )}
    </>
  )
}