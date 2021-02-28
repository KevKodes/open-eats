import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Modal } from '../../context/Modal';
import SearchComponent from '../SearchComponent';

export default function SearchButton() {
  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   console.log('into the search useEffect')
  //   setShowModal(false)
  // },[])

  return (
    <>
      <NavLink 
        className="search-image"
        exact to="/"
        // onClick={() => setShowModal(true)}
      >
        <i className="fas fa-search"></i>
      </NavLink>
      {/* {showModal && (
        <Modal 
          onClose={() => setShowModal(false)}
          className="search-button-modal"
        >
          <SearchComponent />
        </Modal>
      )} */}
    </>
  )
}