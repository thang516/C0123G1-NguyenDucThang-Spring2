import "../css/Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className=" row gy-3">
                        <div className=" col-lg-3 col-md-6 col-6 d-flex">
                            <div>
                                <h4>Contract</h4>
                                <strong>Address :</strong> Hoa Xuan,Cam Le,Da Nang
                                <br/>
                                <p>
                                    <strong>Phone :</strong> +84 782.391.943
                                    <br/>
                                    <strong>Email :</strong> zeusaccessory@gmail.com
                                    <br/>
                                </p>{" "}
                                <h4>Opening Hours</h4>
                                <p>
                                    <strong>Mon-Sun: </strong>09AM - 23PM
                                    <br/>
                                </p>
                            </div>
                        </div>
                        <div className=" col-lg-3 col-md-6 col-6 footer-links d-flex">
                            <div>
                                <h4>LEGAL</h4>
                                <p>Terms and conditions</p>
                                <p>Privacy &amp; cookies</p>
                                <p>Accessibility</p>
                                <p>Legal issues</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 footer-links d-flex">
                            <div>
                                <h4>Orders</h4>
                                <p>Returns &amp; exchange</p>
                                <p>Collect in store</p>
                                <p>Collect in store</p>
                                <p>Payment</p>
                                <p>Shipping</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 footer-links">
                            <h4>Follow Us</h4>
                            <div className="social-links d-flex">
                                <a href="#" className="twitter">
                                    <i className="fa-brands fa-twitter"/>
                                </a>
                                <a href="#" className="facebook">
                                    <i className="fa-brands fa-facebook"/>
                                </a>
                                <a href="#" className="instagram">
                                    <i className="fa-brands fa-instagram"/>
                                </a>
                                <a href="#" className="linkedin">
                                    <i className="fa-brands fa-linkedin"/>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="copyright">
                        © Copyright{" "}
                        <strong>
                            <span>Đức Thắng</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                </div>
            </footer>

        </>
    )
}