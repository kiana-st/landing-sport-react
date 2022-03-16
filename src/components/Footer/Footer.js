import React from 'react';
import {Container,Col,Row,Button, Figure} from 'react-bootstrap';
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import './footer.css';

function Footer() {
    return (
        <>
            <footer className="bg-dark text-white pt-5 bp-4">
                <Container className="text-center text-md-left">
                    <Row className='text-center text-md-left'>
                        <Col md={3} lg={3} xl={3} mx-auto mt-3>
                            <h5 className="text-uppercase mb-4 font-wight-bold text-warning">
                                ارتباط با ما
                            </h5>
                            <p>اولین سامانه رزرو آنلاین مراکز ورزشی، سلامتی</p>
                        </Col>
                        <Col md={2} lg={2} xl={2} mx-auto mt-3>
                            <h5 className="text-uppercase mb-4 font-wight-bold text-warning">پشتیبانی</h5>
                            <p><a href='#' className="text-white foot">اطلاعات تماس</a></p>
                            <p><a href='#' className="text-white foot">دانلود اپلیکیشن</a></p>
                            <p><a href='#' className="text-white foot">درباره شرکت</a></p>
                            <p><a href='#' className="text-white foot">سوالات متداول</a></p>
                        </Col>
                        <Col md={3} lg={2} xl={2} mx-auto mt-3>
                            <h5 className="text-uppercase mb-4 font-wight-bold text-warning">دسترسی سریع</h5>
                            <p><a href='#' className="text-white foot">صفحه نخست</a></p>
                            <p><a href='#' className="text-white foot">ورود به سایت</a></p>
                            <p><a href='#' className="text-white foot">تالار گفتمان</a></p>
                            <p><a href='#' className="text-white foot">ثبت نام در سایت</a></p>
                        </Col>
                    
                        <Col md={4} lg={2} xl={2} mx-auto mt-3>
                            <h5 className="text-uppercase mb-4 font-wight-bold text-warning">لینک های مفید</h5>
                            <p><a href='#' className="text-white foot">سبد خرید</a></p>
                            <p><a href='#' className="text-white foot">آموزش سایت</a></p>
                            <p><a href='#' className="text-white foot">وبلاگ</a></p>
                            <p><a href='#' className="text-white foot">آموزش خرید از سایت</a></p>
                        </Col>
                        <Col md={4} lg={3} xl={3} mx-auto mt-3>
                            <h5 className="text-uppercase mb-4 font-wight-bold text-warning">خدمات شادزی</h5>
                            <p><a href='#' className="text-white foot"><i className="fab fa-twitter"></i></a></p>
                            <p><a href='#' className="text-white foot">محصولات ما</a></p>
                            <p><a href='#' className="text-white foot">از اینجا شروع کنید</a></p>
                            <p><a href='#' className="text-white foot">آخرین دیدگاها</a></p>
                        </Col>
                    </Row>
                    <hr className="mb-4"/>      
                    <Row className="align-items-center">
                        <Col md={7} lg={8}>
                            <p>Copyright 2021 All right
                                <a href="#" className="foot">
                                    <p className="text-warning">شادزی</p>
                                </a>
                            </p>
                        </Col>
                        <Col md={5} lg={4}>
                            <div className="text-center text-md-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white fs-3"><AiFillTwitterCircle/></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white fs-3"><AiOutlineWhatsApp/></a>
                                    </li>   <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white fs-3"><SiFacebook/></a>
                                    </li>   <li className="list-inline-item">
                                        <a href="#" className="btn-floating btn-sm text-white fs-3"><FaTelegram/></a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
