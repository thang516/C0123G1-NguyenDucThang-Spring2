import "../css/home.css"
export function Footer() {
    return(
        <>
        <footer id="footer" class="footer">

            <div class="container">
                <div class="row gy-3">
                    <div class="col-lg-3 col-md-6 d-flex">
                        <div>
                            <h4>Contract</h4>
                            <strong>Address :</strong> Hoa Xuan,Cam Le,Da Nang<br/>
                            <p>
                                <strong>Phone :</strong> +84 782.391.943<br/>
                                <strong>Email :</strong> zeusaccessory@gmail.com<br/>
                            </p> <h4>Opening Hours</h4>
                            <p>
                                <strong>Mon-Sun: </strong>09AM - 23PM<br/>
                            </p>

                        </div>

                    </div>

                    <div class="col-lg-3 col-md-6 footer-links d-flex">
                        <div>
                            <h4>LEGAL</h4>
                            <p>
                                Terms and conditions
                            </p>
                            <p>Privacy & cookies</p>
                            <p>
                                Accessibility</p>
                            <p>

                                Legal issues
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links d-flex">
                        <div>
                            <h4>Orders</h4>
                            <p>Returns & exchange</p>
                            <p>Collect in store</p>
                            <p>Collect in store</p>

                            <p>Payment</p>
                            <p>Shipping</p>

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Follow Us</h4>
                        <div class="social-links d-flex">
                            <a href="#" class="twitter"><i class="fa-brands fa-twitter"/></a>
                            <a href="#" class="facebook"><i class="fa-brands fa-facebook"/></a>
                            <a href="#" class="instagram"><i class="fa-brands fa-instagram"/></a>
                        <a href="#" class="linkedin"><i class="fa-brands fa-linkedin"/></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                &copy; Copyright <strong><span>Đức Thắng</span></strong>. All Rights Reserved
            </div>
        </div>

        </footer>
        </>
    )
}