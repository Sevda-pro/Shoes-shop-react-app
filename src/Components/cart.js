import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function CartOverlay({ show, onClose, value }) {
    let [amount1,amount2,amount3]=value
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Total items:{amount1+amount2+amount3}</h3>
        <h4>Total Price:${amount1*100+amount2*150+amount3*200}</h4>
        {amount1 > 0 && <span>Nike Shoes1: {amount1}</span>}<br/>
        {amount2 > 0 && <span>Nike Shoes2: {amount2}</span>}<br/>
        {amount3 > 0 && <span>Nike Shoes3: {amount3}</span>}<br/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

