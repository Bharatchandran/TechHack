import { useEffect, useState } from "react";
import "./BeansRecipe/BeansRecipe.css"
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Icon } from '@iconify/react';

const MissingIngredientsModal = ({show, handleCloseModal}) => {

  return (
    <>
      <Modal show={show} onHide={handleCloseModal} >
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title >Mexican Beans</Modal.Title >
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <p> Eight Ingredients </p>
          <p> <b>Two Ingredients Out of Stock </b>  </p>
          <Container className="custom-container mb-4 d-flex flex-column align-items-center">
            <Row>
              <Col className="mb-3">
                <Card style={{ width: '10rem', borderRadius: '1rem'}}> 
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="text-center align-middle">Tinned Tomato</Card.Title>
                    <Icon icon="fluent:number-circle-2-16-regular" style={{height:"25px", width:"25px"}}> </Icon>
                    <p>Stock</p>
                    <Icon icon="teenyicons:tick-circle-solid" color="#3aa832"  style={{height:"25px", width:"25px"}}> </Icon>
                    </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3"> 
              <Card style={{ width: '10rem', borderRadius: '1rem'}}> 
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="text-center align-middle">Tinned Beans</Card.Title>
                    <Icon icon="fluent:number-circle-4-16-regular" style={{height:"25px", width:"25px"}}> </Icon>
                    <p>Stock</p>
                    <Icon icon="fluent:number-circle-2-16-filled" color="#d61e3a"  style={{height:"30px", width:"30px"}}> </Icon>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="mb-3"> 
              <Card style={{ width: '10rem', borderRadius: '1rem'}}> 
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="text-center align-middle">Tinned Tomato</Card.Title>
                    <Icon icon="fluent:number-circle-5-16-regular" style={{height:"25px", width:"25px"}}> </Icon>
                    <p>Stock</p>
                    <Icon icon="fluent:number-circle-0-16-filled" color="#d61e3a"  style={{height:"30px", width:"30px"}}> </Icon>
                    </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
              <Card style={{ width: '10rem', borderRadius: '1rem'}}> 
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="text-center align-middle">Tinned Tomato</Card.Title>
                    <Icon icon="fluent:number-circle-6-16-regular" style={{height:"25px", width:"25px"}}> </Icon>
                    <p>Stock</p>
                    <Icon icon="teenyicons:tick-circle-solid" color="#3aa832"  style={{height:"25px", width:"25px"}}> </Icon>
                    </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container>
          <div className="reciepe__functions">
            <button onClick={handleCloseModal}> Add to Shopping List </button>
            <button onClick={handleCloseModal}> Remove Ingredients from Stock </button>
            <button onClick={handleCloseModal}> Edit Recipe </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )

}

export default MissingIngredientsModal