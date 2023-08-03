import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/detail.css"

import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Breadcrumb, BreadcrumbItem, BreadcrumbLink,
} from '@chakra-ui/react'
import {useNavigate} from "react-router";

export function Detail() {
    const list = ['list1', 'list2', 'list3'];
    const navigate = useNavigate();
    const [currentColor, setCurrentColor] = useState(0);
    return (
        <>
            {/*<Breadcrumb>*/}
            {/*    <BreadcrumbItem>*/}
            {/*        <BreadcrumbLink href='/'>Home</BreadcrumbLink>*/}
            {/*    </BreadcrumbItem>*/}

            {/*    <BreadcrumbItem>*/}
            {/*        <BreadcrumbLink href='/detail'>Detail</BreadcrumbLink>*/}
            {/*    </BreadcrumbItem>*/}
            {/*</Breadcrumb>*/}

            <div className="containers">
                <div className="content">
                    <div className="content-left">
                        <div className="content-select">
                            <div>
                                <img
                                    src="https://assets.hermes.com/is/image/hermesproduct/stairs-hand-towel--103190M%2003-flat-wm-1-0-0-130-130_g.jpg"
                                    alt=""/>
                            </div>
                            <div>
                                <img
                                    src="https://assets.hermes.com/is/image/hermesproduct/stairs-hand-towel--103190M%2003-folded-wm-4-0-0-130-130_g.jpg    "
                                    alt=""/>
                            </div>
                            <div>
                                <img
                                    src="https://assets.hermes.com/is/image/hermesproduct/stairs-hand-towel--103190M%2003-worn-9-0-0-130-130_g.jpg"
                                    alt=""/>
                            </div>
                        </div>

                        <div className="content-img">
                            {/*{list[currentColor]}*/}
                                <img
                                    src="https://assets.hermes.com/is/image/hermesproduct/stairs-hand-towel--103190M%2003-folded-wm-4-0-0-800-800_g.jpg"
                                    alt=""/>
                            </div>
                        </div>
                        <div className='main-content'>
                            <div className='description'>
                                <h4>The story behind</h4>
                                <p>Bath linen is
                                    making its
                                    comeback this
                                    season! Philippe Mouquet originally came up with the "Stairs" design for a tie motif
                                    in
                                    the
                                    Spring-Summer
                                    2010 collection. The design showcases adjoining Hs, climbing upwards like stairs.
                                    Featured
                                    in
                                    various
                                    different sizes, the design introduces two new colorways: Griotte and Safran.</p>
                            </div>
                            <div>
                            </div>

                            <div className="css-im" style={{marginRight: "2.5rem"}}>
                                <h4 style={{marginBottom: "-4rem", marginTop: "2rem"}}>The Perfect Partner</h4>
                                <div style={{display: "flex", marginTop: " 5rem", gap: "1rem"}}>
                                    <div className="card"
                                         style={{width: "100%", border: "none", backgroundColor: " #f6f1eb"}}>
                                        <img
                                            src="https://assets.hermes.com/is/image/hermesproduct/010124P_front_wm_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=400&hei=400"
                                            className="card-img-top" alt="..."/>
                                        <div style={{paddingTop: "0.5rem"}}>
                                            Iskender highball glass
                                        </div>
                                        <div>$590</div>

                                    </div>
                                    <div className="card"
                                         style={{width: "100%", border: "none", backgroundColor: "#f6f1eb"}}>
                                        <img
                                            src="https://assets.hermes.com/is/image/hermesproduct/311602M%2001_wornsquare_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=400&hei=400"
                                            className="card-img-top" alt="..."/>
                                        <div style={{paddingTop: "0.5rem"}}>
                                            La Source de Pegase ashtray
                                        </div>
                                        <div>$660</div>
                                    </div>
                                    <div className="card"
                                         style={{width: "100%", border: "none", backgroundColor: "#f6f1eb"}}>
                                        <img
                                            src="https://assets.hermes.com/is/image/hermesproduct/800618E%2001_worn_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=400&hei=400"
                                            className="card-img-top" alt="..."/>
                                        <div style={{paddingTop: "0.5rem"}}>
                                            Reversible dog mat
                                        </div>
                                        <div>$1,100</div>
                                    </div>
                                    <div className="card"
                                         style={{width: "100%", border: "none", backgroundColor: "#f6f1eb"}}>
                                        <img
                                            src="https://assets.hermes.com/is/image/hermesproduct/3H3700D8AT_worn_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=400&hei=400"
                                            className="card-img-top" alt="..."/>

                                        <div style={{paddingTop: "0.5rem"}}>
                                            Briana swimsuit
                                        </div>
                                        <div>$590</div>
                                    </div>
                                </div>


                                <div>
                                    <h4 style={{marginBottom: "-4rem", marginTop: "2rem"}}>Keep exploring</h4>
                                    <div style={{display: "flex", marginTop: "5rem", gap: " 1rem"}}>
                                        <div className="card"
                                             style={{width: " 25%", border: " none", backgroundColor: "#f6f1eb"}}>
                                            <img
                                                src="https://assets.hermes.com/is/image/hermesproduct/103192M%2003_flat_wm_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=400&hei=400"
                                                className="card-img-top" alt="..."/>
                                            <div style={{paddingTop: "0.5rem"}}>
                                                Stairs bath towel
                                            </div>
                                            <div>$340</div>
                                        </div>
                                        <div className="card"
                                             style={{width: " 25%", border: " none", backgroundColor: "#f6f1eb"}}>
                                            <img
                                                src="https://assets.hermes.com/is/image/hermesproduct/103192M%2003_flat_wm_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=400&hei=400"
                                                className="card-img-top" alt="..."/>
                                            <div style={{paddingTop: "0.5rem"}}>
                                                Stairs washcloth
                                            </div>
                                            <div>$70</div>
                                        </div>
                                        <div className="card"
                                             style={{width: " 25%", border: " none", backgroundColor: "#f6f1eb"}}>
                                            <img
                                                src="https://assets.hermes.com/is/image/hermesproduct/103191M%2003_flat_wm_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=400&hei=400"
                                                className="card-img-top" alt="..."/>
                                            <div style={{paddingTop: "0.5rem"}}>
                                                Stairs towel
                                            </div>
                                            <div>$170</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="content-right">
                        <div className="body-right">
                            <h4>Stairs hand towel</h4>

                            <div>
                                $80
                            </div>
                        </div>
                        <div style={{marginTop: "2rem"}}>
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>
                                    color
                                </div>
                                <div>
                                    color
                                </div>
                            </div>


                            <div style={{display: "flex", justifyContent: "center"}}>
                                <div className="color-click">
                                    <div className={`choose-color ${currentColor == 0 ? 'active' : ''}`}>
                                        <button
                                            style={{
                                                backgroundColor: "#d2756c",
                                                height: "2.5rem",
                                                width: "2.5rem",
                                            }}
                                            onClick={() => setCurrentColor(0)}
                                        />
                                    </div>

                                    <div className={`choose-color ${currentColor == 1 ? 'active' : ''}`}>
                                        <button
                                            style={{
                                                backgroundColor: "#d2756c",
                                                height: "2.5rem",
                                                width: "2.5rem",
                                            }}
                                            onClick={() => setCurrentColor(1)}
                                        />
                                    </div>

                                    <div className={`choose-color ${currentColor == 2 ? 'active' : ''}`}>
                                        <button
                                            style={{
                                                backgroundColor: "#d2756c",
                                                height: "2.5rem",
                                                width: "2.5rem",
                                            }}
                                            onClick={() => setCurrentColor(2)}
                                        />
                                    </div>


                                </div>
                            </div>

                            <div style={{justifyContent: "center", textAlign: "center"}}>
                                <button style={{marginTop: "2rem"}} className="btn btn-dark">Add to card
                                </button>
                            </div>
                            <div style={{paddingTop: "2rem"}}>
                                <p>Hand towel in sheared terry cloth</p>

                                <p>- 100% cotton</p>
                                <p>Made in France</p>
                                <p>Measures 15.7" x 23.6"</p>
                            </div>
                            <div>
                            </div>
                        </div>

                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton className="accor">
                                        <Box as="span" flex='1' textAlign='left'>
                                            Product details
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    The color of the product is a surprise!
                                </AccordionPanel>
                            </AccordionItem>


                            <AccordionItem>
                                <h2>
                                    <AccordionButton className="accor">
                                        <Box as="span" flex='1' textAlign='left'>
                                            Delivery & returns

                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <div>
                                        <div>
                                            <strong>Shipping</strong>
                                            <div>
                                                • Complimentary ground shipping within 1 to 7 business days
                                            </div>
                                            <div>
                                                • In-store collection available within 1 to 7 business days
                                            </div>

                                            <div>
                                                • Next-day and Express delivery options also available
                                            </div>
                                            <div>
                                                • See the delivery for details on shipping methods, costs
                                                and delivery times
                                            </div>
                                        </div>


                                        <div>

                                            <strong>Payment methods</strong>
                                            <div>
                                                • By card: Visa®, MasterCard®, American Express®, Discover®, Diners
                                                Club®,
                                                JCB®
                                                and China Union Pay®
                                            </div>
                                            <div>
                                                • By PayPal®&nbsp;and Apple Pay®
                                            </div>

                                        </div>
                                        <div>
                                            <strong>Returns and exchanges&nbsp;</strong>
                                            <div>
                                                • Easy and complimentary, within 30 days
                                            </div>
                                            <div>
                                                • Must be returned to hermes.com, Hermès boutiques will not accept
                                                "Petit h"
                                                products purchased on the hermes.com website for exchange or refund.
                                            </div>
                                            <div>
                                                • See conditions and procedure in our return<span>New window</span>
                                            </div>

                                        </div>


                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton className="accor">
                                        <Box as="span" flex='1' textAlign='left'>
                                            Gifting
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Your purchases are delivered in an orange box tied with a Bolduc ribbon, with the
                                    exception of fragrances, makeup and beauty products, books, certain equestrian and
                                    bulky items.
                                    During checkout, you can include a card with a personalized message and a priceless
                                    invoice.
                                    A customer can exchange a gift. For more details, please contact Customer Service.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>

            </>
            )

            }