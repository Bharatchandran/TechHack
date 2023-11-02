import { useEffect, useState } from "react";
import "./BeansRecipe/BeansRecipe.css"
import "./Hero/Hero.css"
import SearchIcon from '@mui/icons-material/Search';
import "./BeansRecipe/BeansRecipe.css"
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { Icon } from '@iconify/react';

const ShoppingListModal = ({show, handleCloseShoppingModal}) => {

  return (
    <>
      <Modal show={show} onHide={handleCloseShoppingModal} >
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title >Shopping List</Modal.Title >
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <p> Four Items Total </p>
          <p> <b>Two Needed for Recipes </b>  </p>
          <Container className="custom-container mb-3 mt-4 d-flex flex-column align-items-center">
            <Row>
              <Col>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  Stock Check
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Item 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Item 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Item 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </Col>
              <Col>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <Icon icon="ic:baseline-search" />
                  </span>
                </div>
              </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="mb-3">
                <Card style={{ width: '10rem', borderRadius: '1rem'}}> 
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="text-center align-middle">Tinned Beans</Card.Title>
                    <Icon icon="fluent:number-circle-2-16-regular" style={{height:"25px", width:"25px"}}> </Icon>
                    <p>Add</p>
                    <Icon icon="teenyicons:tick-circle-outline" style={{height:"25px", width:"25px"}}> </Icon>
                    </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3"> 
              <Card style={{ width: '10rem', height: '12rem', borderRadius: '1rem'}}> 
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="text-center align-middle">Sour Cream</Card.Title>
                    <div className="mt-auto">
                      <Icon icon="fluent:number-circle-1-16-regular" style={{ height: "25px", width: "25px" }} />
                      <p>Add</p>
                      <Icon icon="teenyicons:tick-circle-outline" style={{ height: "25px", width: "25px" }} />
                    </div>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="mb-3"> 
              <Card style={{ width: '10rem', borderRadius: '1rem'}}> 
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="text-center align-middle">Baby Spinach</Card.Title>
                    <Icon icon="fluent:number-circle-1-16-regular" style={{height:"25px", width:"25px"}}> </Icon>
                    <p>Add</p>
                    <Icon icon="teenyicons:tick-circle-outline" style={{height:"25px", width:"25px"}}> </Icon>
                    </Card.Body>
                </Card>
              </Col>
              <Col className="mb-3">
              <Card style={{ width: '10rem', height: '12rem', borderRadius: '1rem'}}> 
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title className="text-center align-middle">Sliced Bread</Card.Title>
                    <div className="mt-auto">
                      <Icon icon="fluent:number-circle-1-16-regular" style={{ height: "25px", width: "25px" }} />
                      <p>Add</p>
                      <Icon icon="teenyicons:tick-circle-outline" style={{ height: "25px", width: "25px" }} />
                    </div>
                    </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container>
          <div className="reciepe__functions" style={{padding: "1rem"}}>
            <button onClick={handleCloseShoppingModal}> Shopping Complete: Add to Stock </button>
            <button> Edit List </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )

}

export default ShoppingListModal