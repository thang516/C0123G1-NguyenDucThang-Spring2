

import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/home.css"
import * as service from "../service/ProductService"
import {useNavigate} from "react-router";
import {FormattedNumber} from "react-intl";


export function Home() {
    const [productHat, setProductsHat] = useState([]);
    const navigate = useNavigate();
    const [product,setProduct] = useState();

    const getAllProductByType = async  () => {
        const  res = await service.getAllProductByType();
        setProduct(res);
        console.log(res)
    }

    const getAllProductHat = async () => {
        const res = await  service.getProductHat();
        setProductsHat(res);
        console.log(res)
    }


    useEffect(() => {
        getAllProductByType();
        getAllProductHat();
    },[])
    if(!product){
        return null
    }
    if(!productHat){
        return null
    }


    return(
        <>

            {/*<marquee behavior="scroll" direction="right" >Thắng Trai Hàn</marquee>*/}
                <div style={{ justifyContent: "center", textAlign: "center" }}>
                    <h3 style={{ paddingTop: "2rem" }}> SUSPENDED TIME</h3>
                </div>
                <div className="content-pi" style={{ textAlign: "center" }}>
                    <p >When the pace of the hours slows, style enters new spaces.</p>
                </div>
                <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    <span style={{ color: "black",textDecoration:"underline" }} onClick={() => navigate("/list")}>
                        Relax in style
                    </span>
                </div>
                <div
                    style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
                >
                    <img
                        style={{ height: "85%", width: "79vw" }}
                        src="https://assets.hermes.com/is/image/hermesedito/P_169_Maison_Plage_Bain_2023_3?fit=wrap%2C0&wid=1920"
                        alt=""
                    />
                </div>

            <div style={{ justifyContent: "center", textAlign: "center",paddingTop :"1rem" }}>
                <h3>Eclectic clock</h3>
            </div>
            <div  className="content-summer" style={{ textAlign: "center" }}>
                <p>Petit h awakens dormant materials to reinvent bold objects.</p>
            </div>
            <div  style={{ textAlign: "center", paddingBottom: "2rem" }}>
                <div className="content-p">
                    <span style={{ color: "black" }} >
                        Discover the collection
                    </span>
                </div>
            </div>
            <div
                className="content-vie"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "6rem"
                }}  >

                {/*<video  className="content-vie-left"  style={{*/}

                {/*}} autoPlay loop muted playsInline="playsinline" preload="metadata">*/}
                {/*    <source*/}
                {/*        src="https://assets.hermes.com/is/content/hermesedito/169_ECOM_LAPIN_MOVIE-AVS.m3u8"*/}
                {/*        type="video/mp4"*/}
                {/*    />*/}
                {/*</video>*/}
                    <div >
                        <img style={{ width: "100%",
                            height: "92%",
                            paddingLeft: "9.5rem",
                            objectFit: "cover"}}  src="https://assets.hermes.com/is/image/hermesedito/P_11_TASSE%20PETIT%20H%20HORLOGE?fit=wrap%2C0&wid=696" alt=""/>
                    </div>
                <div className="content-vie-right"
                     style={{
                         display: "grid",
                         gridTemplateColumns: "repeat(2, 0.5fr)",
                         gap: "2rem",
                         paddingRight: "8rem"  }} >


                        {
                            product && product.map((v) =>(
                                <div key={v.id} style={{ width: "90%" }}>

                                    <div onClick={() => navigate(`/detail/${v.id}`)}>
                                        <img src={v.img}  className="card-img-top" />
                                    </div>
                                    <div>{v.nameProduct}</div>
                                    <div>
                                        $
                                        <FormattedNumber
                                            value={v.price}
                                            currency="USD"
                                            minimumFractionDigits={0}>
                                        </FormattedNumber>
                                       </div>
                                </div>
                            ))
                        }



                </div>
            </div>


                <div   style={{ textAlign: "center", marginTop: "3rem" }}>
                    <h3>OUR CAVE OF WONDERS</h3>
                </div>
                <div className="cards"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "2rem",
                        padding: "2rem 9.5rem"
                    }}  >
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_WSILK_SCARF_001387S_53?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" ,backgroundColor : " #f6f1eb"}}>WOMEN SILK</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_WATCH_049573WW00?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" ,backgroundColor : " #f6f1eb" }}>Blankets and pillows</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesproduct/cheval-talaria-blanket--103690M%2002-flat-wm-1-0-0-800-800_g.jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" ,backgroundColor : " #f6f1eb" }}>SILK OFFICE</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_JEWLERY_EARRINGS_222514B_00?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" ,backgroundColor : " #f6f1eb"}}>JEWELRY</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_HOME_BEACH_103583M_02?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" ,backgroundColor : " #f6f1eb"}}>BATH AND BEACH</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_WFASHACCESS_HAT_231039N_60?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" ,backgroundColor : " #f6f1eb"}}>HATS</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_FRAGRANCE_107758V0?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" ,backgroundColor : " #f6f1eb"}}>FRAGRANCES</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_SHOES_SANDALS_202230Z_2K?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" ,backgroundColor : " #f6f1eb"}}>WOMEN SHOES</div>
                    </div>
                </div>
                <div style={{ justifyContent: "center", textAlign: "center" }}>
                    <h3>FREEZE FRAME</h3>
                </div>
                <div className="content-p" style={{ textAlign: "center" }}>
                    <p></p>
                    <p>
                        The Fall-Winter Men's accessory collection brings together timeless pieces
                        of precise construction and a palette of deep shades.
                    </p>
                    <p />
                </div>
                <div  style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    <a style={{ color: "black" }} href="">
                        Observe the details
                    </a>
                </div>
                <div className="img-cs"
                     style={{ textAlign: "center", display: "flex", justifyContent: "center" }} >
                    <img
                        style={{ height: "85%", width: "79vw",paddingBottom: "20px" }}
                        src="https://assets.hermes.com/is/image/hermesedito/P_169_AH22_F_Badges-1?name=P_169_AH22_F_Badges-1&end?fit=wrap,0&wid=1280"
                        alt=""
                    />
                </div>
                {/*<div className="content-zem"*/}
                {/*    style={{*/}
                {/*        display: "grid",*/}
                {/*        gridTemplateColumns: "repeat(4, 1fr)",*/}
                {/*        gap: "2rem",*/}
                {/*        padding: "2rem 9.5rem"*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <div className="card" style={{ width: "100%", border: "none" ,backgroundColor : " #f6f1eb" }}>*/}
                {/*        <img*/}
                {/*            src="https://assets.hermes.com/is/image/hermesproduct/368101H42V_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"*/}
                {/*            className="card-img-top"*/}
                {/*            alt="..."*/}
                {/*        />*/}
                {/*        <div style={{ paddingTop: "0.5rem"}}>"Coups de Goua'H" swim trunks</div>*/}
                {/*        <div>$560</div>*/}
                {/*    </div>*/}
                {/*    <div className="card" style={{ width: "100%", border: "none" ,backgroundColor : " #f6f1eb" }}>*/}
                {/*        <img*/}
                {/*            src="https://assets.hermes.com/is/image/hermesproduct/231051N+02_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"*/}
                {/*            className="card-img-top"*/}
                {/*            alt="..."*/}
                {/*        />*/}
                {/*        <div style={{ paddingTop: "0.5rem"}}>Fred Look at Mi bucket hat</div>*/}
                {/*        <div>$415</div>*/}
                {/*    </div>*/}
                {/*    <div className="card" style={{ width: "100%", border: "none" ,backgroundColor : " #f6f1eb" }}>*/}
                {/*        <img*/}
                {/*            src="https://assets.hermes.com/is/image/hermesproduct/221824ZH45_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"*/}
                {/*            className="card-img-top"*/}
                {/*            alt="..."*/}
                {/*        />*/}
                {/*        <div style={{ paddingTop: "0.5rem"}}>Izmir sandal</div>*/}
                {/*        <div>$740</div>*/}
                {/*    </div>*/}
                {/*    <div className="card" style={{ width: "100%", border: "none" ,backgroundColor : " #f6f1eb" }}>*/}
                {/*        <img*/}
                {/*            src="https://assets.hermes.com/is/image/hermesproduct/703203FK01_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"*/}
                {/*            className="card-img-top"*/}
                {/*            alt="..."*/}
                {/*        />*/}
                {/*        <div style={{ paddingTop: "0.5rem"}}>Clic HH So Black bracelet</div>*/}
                {/*        <div>$740</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div style={{ justifyContent: "center", textAlign: "center" }}>
                    <h3>AN IDYLLIC GATHERING </h3>
                </div>
                <div  className="content-summer" style={{ textAlign: "center" }}>
                    <p>Summertime essentials accept an invitation to escape.</p>
                </div>
                <div  style={{ textAlign: "center", paddingBottom: "2rem" }}>
                    <div className="content-p">
                        <a style={{ color: "black" }} href="">
                            Get carried away
                        </a>
                    </div>
                </div>
                <div
                    className="content-vie"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "6rem"
                    }}  >

                    <video  className="content-vie-left"  style={{
                        width: "100%",
                        height: "92%",
                        paddingLeft: "9.5rem",
                        objectFit: "cover"
                    }} autoPlay loop muted playsInline="playsinline" preload="metadata">
                        <source
                            src="/anh/video.mp4"
                            type="video/mp4"
                        />
                    </video>
                    {/*    <div style="padding: 0 1rem">*/}
                    {/*        <img style="width: 100%;height : 93% ;padding-left: 8.5rem" src="anh/anh2.png" alt="">*/}
                    {/*    </div>*/}
                    <div className="content-vie-right"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 0.5fr)",
                            gap: "2rem",
                            paddingRight: "8rem"
                        }}
                    >
                        {
                            productHat && productHat.map((pa) => (

                                <div key={pa.id} style={{ width: "90%" }}>
                                    <div onClick={() => navigate(`/detail/${pa.id}`)}>
                                        <img src={pa.img}  className="card-img-top" />
                                    </div>
                                    <div>{pa.nameProduct}</div>
                                    <div>

                                        $
                                        <FormattedNumber
                                            value={pa.price}
                                            currency="USD"
                                            minimumFractionDigits={0}>
                                        </FormattedNumber>
                                        </div>
                                </div>
                            ))
                        }



                    </div>
                </div>


        </>
    )
}
