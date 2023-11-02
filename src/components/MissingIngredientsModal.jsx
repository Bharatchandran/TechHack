import { useEffect, useState } from "react";
import "./BeansRecipe/BeansRecipe.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

const MissingIngredientsModal = ({show, handleCloseModal}) => {

  return (
    <>
      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Mexican Beans</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Eight Ingredients </p>
          <p> Two Ingredients Out of Stock  </p>
          <div>

          </div>
          <div className="reciepe__functions">
            <button> Add to Shopping List </button>
            <button> Remove Ingredients from Stock </button>
            <button> Edit Recipe </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )

}

export default MissingIngredientsModal