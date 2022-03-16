import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import back from '../../images/pexels.jpg';
import { Container, Col, Row, Button, Figure } from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import { Modal, Form } from 'react-bootstrap';




function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo" >
                        React
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                     
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                                درباره ما
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/discover" activeClassName="active" className="nav-links" onClick={handleClick}>
                                تماس با ما
                            </NavLink>
                        </li>
                          <li className="nav-item">
                            <NavLink to="/services" activeClassName="active" className="nav-links" onClick={handleClick}>
                                خدمات
                            </NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="/home" activeClassName="active" className="nav-links" onClick={handleClick} >
                                خانه
                            </NavLink>
                        </li>
                         <li className="nav-item" onClick={handleShow}>
                            <NavLink to="/signup" activeClassName="active" className="nav-links" onClick={handleClick}>
                                ورود
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <AiOutlineClose /> : <GoThreeBars />}
                    </div>
                </div>
            </nav>

            <div>
                <Figure className="position-relative">
                    <img className='img-fluid' src={back} alt="" />
                    <FigureCaption className="figurecaption">
                    راز شاد زیستن و خوشبختی 
                        <h5>انجام روزانه یوگا و مدیتیشن به شما کمک می‌کند <br />تا کشش و قدرت عضلاتتان را افزایش دهید </h5>
                        <Button variant="success">شروع کنید</Button>
                    </FigureCaption>
                </Figure>
            </div>


            {/* <div className="background">
            <img className='imgback' src={back} alt="" />
            <div >
            <Container className="text">
                <Row>
                    <Col xs={12} md={8}><h1>Virtual Banking Made Easy</h1></Col>
                </Row>
                <Row>
                <Col xs={12} md={8}><h4>Sign up for a new account today and receive $20<br/>in credit towards your next paymen.</h4></Col> 
                </Row>
                <Row>
                <Col xs={12}>  <Button variant="success">Get Start</Button>{' '}</Col>

                </Row>

            </Container>
            </div>
            </div> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Body style={{ textAlign: 'end' }}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>آدرس ایمیل</Form.Label>
                            <Form.Control type="email" placeholder="ایمیل خود را وارد کنید" className="inp" />
                            <Form.Text className="text-muted">
                                ایمیل خود را در اختیار کسی قرار ندهید
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>پسورد</Form.Label>
                            <Form.Control type="password" placeholder="پسورد" className="inp" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            ارسال
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="mdf">
                    <Button variant="secondary" onClick={handleClose}>
                        بستن
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        تایید
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Navbar;
