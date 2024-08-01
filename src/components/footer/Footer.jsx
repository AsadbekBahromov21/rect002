import React from 'react'
import "./Footer.scss"
import footerfoto from "../../image/footer.png"
import { FaHeart } from "react-icons/fa";
const Footer = () => {

    return (
        <>
            <div className='footer'>
                <div className="container">
                    <hr />
                    <div className="footer__wrapper">
                        <div className="footer__logo">
                            <img className='foto' src={footerfoto} alt="" />
                            <p className="footer__p">Your natural candle made for your home and for your wellness.</p>
                        </div>
                        <ul className="footer__collection">
                            <b className="footer__b">Discovery</b>
                            <li className="footer__item"><a href="#"><span>New season</span></a></li>
                            <li className="footer__item"><a href="#"><span>Most searched</span></a></li>
                            <li className="footer__item"><a href="#"><span>Most selled</span></a></li>
                        </ul>
                        <ul className="footer__collection activ">
                            <b className="footer__b">About</b>
                            <li className="footer__item"><a href="#"><span>Help</span></a></li>
                            <li className="footer__item"><a href="#"><span>Shipping</span></a></li>
                            <li className="footer__item"><a href="#"><span>Affiliate</span></a></li>
                        </ul>
                        <ul className="footer__collection info">
                            <b className="footer__b">Info</b>
                            <li className="footer__item"><a href="#"><span>Contact us</span></a></li>
                            <li className="footer__item"><a href="#"><span>Privacy Policies</span></a></li>
                            <li className="footer__item"><a href="#"><span>Terms & Conditions</span></a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="footer__color">
                <div className="container">
                    <div className="footer__word">
                        <p className='footer__all'>©Candleaf All Rights Reserved.</p>
                        <p className='footer__with info'>designed with <FaHeart className='heart' /> by uxbly </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer