import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Total } from './list';
import CartOverlay from './cart';
import './header.css'
function Header() {
  const [showCart, setShowCart] = useState(false);

  const forinput = (total) => total.reduce((accum, curr) => accum + curr, 0);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Total.Consumer>
        {(total) => {
          const [amount1, amount2, amount3] = total;
          const a = forinput(total);

          return (
            <div>
              <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                  <Navbar.Brand href="">The Shoe Center</Navbar.Brand>
                  <Navbar.Toggle />
                  <Col xs="auto">
                    <Button onClick={handleCartClick} className='cartbutton'>Your cart: {a}</Button>
                  </Col>
                </Container>
              </Navbar>
              <Image className="img" src="./sports.avif" fluid />
              <CartOverlay show={showCart} onClose={handleCloseCart} value={[amount1, amount2, amount3]} />
            </div>
          );
        }}
      </Total.Consumer>
    </div>
  );
}

export default Header;
