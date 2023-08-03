import React from "react";
import "../css/cards.css"
export function Cards() {
    return (
        <>

            <div style={{display: "flex",justifyContent: "center",gap :"3rem"}}>
                <div style={{
                    height: "70%",
                    width: "50%",
                    backgroundColor: " #f6f1eb",
                    padding: " 2rem 2rem"
                }}>
                    <div style={{height: "2rem"}}>
                        11
                    </div>


                    <div style={{width: "100%", height: "4rem", display: "flex"}}>
                        <div style={{width: "20%"}}>
                            <img style={{width: "100%", height: "100%"}}
                                 src="https://assets.hermes.com/is/image/hermesproduct/beltkit-32?$leatherstrap=073967CAEG_composite_2&$buckle=081751CUZ3_front_1"
                                 alt=""/>
                        </div>
                        <div style={{width: " 70%"}}>
                            <div className="d-flex">
                                <p style={{ paddingRight: "2%" }}></p><div className="d-flex">
                                <button type="button" className="minus"><span>-</span></button>
                                <input  id="quantity_64c88c2c676ec"
                                       className="input" min="0" max />
                                <button type="button" value="+" className="plus"><span>+</span></button>
                            </div>
                            </div>

                        </div>

                    </div>
                    <div style={{display: "flex", height: "3rem",marginTop:"2rem"}}>
                        <div style={{width: " 60%"}}>
                            Subtual
                        </div>
                        <div style={{width: "40%"}}>
                            $
                        </div>
                    </div>

                    <div style={{height: "3rem",marginTop:"2rem"}}>
                        <h6>Shipping</h6>
                        <div>Shipping costs will be calculated during checkout</div>
                    </div>

                    <div style={{height: "3rem",marginTop:"2rem"}}>
                        <h6>Taxes</h6>
                        <div>   Taxes will be calculated during checkout</div>
                    </div>

                    <div style={{height: "3rem",marginTop:"2rem"}}>
                        Total
                    </div>
                    <div style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}>
                        <div>
                            <button style={{width: "15rem"}} className="btn btn-dark">CheckOut</button>
                        </div>
                    </div>
                </div>

                <div style={{
                    width: "30%",
                    backgroundColor: "#f6f1eb",
                    padding: "2rem 2rem"
                }}>
                   <div>
                       <h4 style={{paddingBottom:"1rem"}}>The orange box</h4>

                       <div style={{width: "100%", display: "flex"}}>
                           <div style={{width: "30%"}}>
                               <img src="https://assets.hermes.com/is/image/hermesedito/orange-box?name=orange-box&end"
                                    alt=""/>
                           </div>
                           <div style={{width: " 70%"}}>
                               <div style={{paddingLeft: "3rem"}}>
                                   All orders are delivered in an orange box tied with a Bolduc ribbon, with the
                                   exception of certain items
                               </div>
                           </div>
                       </div>

                   </div>

                    <h4 style={{marginTop: " 2rem"}}>Customer Service</h4>
                    <div style={{marginTop:"1rem"}}>
                        <i className="fa-sharp fa-solid fa-phone"/><span> +84 782 391 943</span>
                        <div style={{padding: " 0 2rem"}}>Monday to Friday: 9am - 6pm EST</div>
                        <div style={{padding: " 0 2rem"}}>Saturday: 10am - 6pm EST</div>
                    </div>

                    <div style={{display: "flex",paddingTop:"2rem"}}>
                        <div style={{padding: "0.5rem 2rem"}}>
                            <i className="fa-solid fa-truck"/>
                            <span>Standard</span>
                            <div>delivery</div>
                        </div>
                        <div style={{padding: "0.5rem 2rem"}}>
                            <i className="fa-solid fa-arrow-right-arrow-left"/>
                            <div>Returns &</div>
                            <div>exchanges</div>
                        </div>
                        <div style={{padding: "0.5rem 2rem"}}>
                            <i className="fa-solid fa-lock"/>
                            <p> Shop securely</p>

                        </div>
                    </div>

                    <div style={{display: "flex", gap: "2rem", paddingTop: "1rem"}}>
                        <div>
                            <i className="fa-brands fa-cc-visa  fa-2xl"/>
                        </div>
                        <div>
                            <i className="fa-brands fa-cc-discover  fa-2xl"/>
                        </div>
                        <div>
                            <i className="fa-brands fa-cc-diners-club  fa-2xl"/>
                        </div>
                        <div>
                            <i className="fa-brands fa-cc-jcb fa-2xl"/>
                        </div>
                        <div>
                            <i className="fa-brands fa-cc-amex fa-2xl"/>
                        </div>
                        <div>
                            <i className="fa-sharp fa-solid fa-money-bill fa-2xl"/>
                        </div>

                    </div>
                    <div style={{display: "flex", gap: "5rem", paddingTop: "2rem", justifyContent: "center"}}>
                        <div>
                            <i className="fa-brands fa-pied-piper-pp fa-2xl"/>
                        </div>
                        <div>
                            <i className="fa-brands fa-cc-mastercard fa-2xl"/>
                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}