import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import circule from '../images/lucas.jpg';
import tale from '../images/tale.jpg';
import studio from '../images/studio.jpg';
import rfstudio from '../images/rfstudio.jpg';
import pic4 from '../images/pic4.jpg';
import pic5 from '../images/pic5.jpg';
import pic6 from '../images/pic6.jpg';

import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillDribbbleSquare } from "react-icons/ai";
import './discover.css';


function Discover() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
    };
    return (
        <>
            <div className="slider">
                <div className="container mt-5">
                    <p className="text-title">شادزی برای همه سنین</p>
                    <Slider {...settings} >
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-image">
                                    <img src={circule} alt="" className="cardpic" />
                                </div>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#"><AiFillFacebook className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaInstagramSquare className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaTwitterSquare className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><AiFillDribbbleSquare className="icon" /></a>
                                    </li>
                                </ul>
                                <div className="details">
                                    <h2>Kiana soltani<span className="job-title">Front-End</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-image">
                                    <img src={rfstudio} alt="" className="cardpic" />
                                </div>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#"><AiFillFacebook className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaInstagramSquare className="icon" /></a>
                                    </li><li>
                                        <a href="#"><FaTwitterSquare className="icon" /></a>
                                    </li><li>
                                        <a href="#"><AiFillDribbbleSquare className="icon" /></a>
                                    </li>
                                </ul>
                                <div className="details">
                                    <h2>Kiana soltani<span className="job-title">Front-End</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-image">
                                    <img src={tale} alt="" className="cardpic" />
                                </div>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#"><AiFillFacebook className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaInstagramSquare className="icon" /></a>
                                    </li><li>
                                        <a href="#"><FaTwitterSquare className="icon" /></a>
                                    </li><li>
                                        <a href="#"><AiFillDribbbleSquare className="icon" /></a>
                                    </li>
                                </ul>
                                <div className="details">
                                    <h2>Kiana soltani<span className="job-title">Front-End</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-image">
                                    <img src={pic4} alt="" className="cardpic" />
                                </div>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#"><AiFillFacebook className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaInstagramSquare className="icon" /></a>
                                    </li><li>
                                        <a href="#"><FaTwitterSquare className="icon" /></a>
                                    </li><li>
                                        <a href="#"><AiFillDribbbleSquare className="icon" /></a>
                                    </li>
                                </ul>
                                <div className="details">
                                    <h2>Kiana soltani<span className="job-title">Front-End</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-image">
                                    <img src={pic6} alt="" className="cardpic" />
                                </div>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#"><AiFillFacebook className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaInstagramSquare className="icon" /></a>
                                    </li><li>
                                        <a href="#"><FaTwitterSquare className="icon" /></a>
                                    </li><li>
                                        <a href="#"><AiFillDribbbleSquare className="icon" /></a>
                                    </li>
                                </ul>
                                <div className="details">
                                    <h2>Kiana soltani<span className="job-title">Front-End</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="card-wrapper">
                            <div className="card">
                                <div className="card-image">
                                    <img src={pic5} alt="" className="cardpic" />
                                </div>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#"><AiFillFacebook className="icon" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><FaInstagramSquare className="icon" /></a>
                                    </li><li>
                                        <a href="#"><FaTwitterSquare className="icon" /></a>
                                    </li><li>
                                        <a href="#"><AiFillDribbbleSquare className="icon" /></a>
                                    </li>
                                </ul>
                                <div className="details">
                                    <h2>Kiana soltani<span className="job-title">Front-End</span></h2>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Discover
