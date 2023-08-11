

import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/home.css"
import * as service from "../service/ProductService"
import {useNavigate} from "react-router";
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbSeparator,
// } from '@chakra-ui/react'
//


export function Home() {
    const navigate = useNavigate();
    const [product,setProduct] = useState();

    const getAllProductByType = async  () => {
        const  res = await service.getAllProductByType();
        setProduct(res);
        console.log(res)
    }

    useEffect(() => {
        getAllProductByType();
    },[])
    if(!product){
        return null
    }


    return(
        <>
            {/*<Breadcrumb>*/}
            {/*    <BreadcrumbItem>*/}
            {/*        <BreadcrumbLink href='/'>Home</BreadcrumbLink>*/}
            {/*    </BreadcrumbItem>*/}

            {/*    <BreadcrumbItem>*/}
            {/*        <BreadcrumbLink href='#'>Docs</BreadcrumbLink>*/}
            {/*    </BreadcrumbItem>*/}

            {/*    <BreadcrumbItem isCurrentPage>*/}
            {/*        <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>*/}
            {/*    </BreadcrumbItem>*/}
            {/*</Breadcrumb>*/}
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
                    <a style={{ color: "black" ,    textDecoration: "underline"}} href="">
                        Discover the collection
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

                {/*<video  className="content-vie-left"  style={{*/}
                {/*   */}
                {/*}} autoPlay loop muted playsInline="playsinline" preload="metadata">*/}
                {/*    <source*/}
                {/*        src="/anh/video.mp4"*/}
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
                                <img
                                    src={v.img}
                                    className="card-img-top"
                                    alt="..."/>
                            <div>{v.nameProduct}</div>
                            <div>{v.price}</div>
                                </div>

                            ))
                        }


                {/*    <div style={{ width: "90%" }}>*/}
                {/*        <img*/}
                {/*            src="https://assets.hermes.com/is/image/hermesproduct/1062208+52_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"*/}
                {/*            className="card-img-top"*/}
                {/*            alt="..."*/}
                {/*        />*/}
                {/*        <div>  Openwork bracelet GM</div>*/}
                {/*        <div>$370</div>*/}
                {/*    </div>*/}
                {/*    <div style={{ width: "90%" }}>*/}
                {/*        <img*/}
                {/*            src="https://assets.hermes.com/is/image/hermesproduct/1109078+92_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"*/}
                {/*            className="card-img-top"*/}
                {/*            alt="..."*/}
                {/*        />*/}
                {/*        <div>Photo album GM</div>*/}
                {/*        <div>$1,350</div>*/}
                {/*    </div>*/}
                {/*    <div style={{ width: "90%" }}>*/}
                {/*        <img*/}
                {/*            src="https://assets.hermes.com/is/image/hermesproduct/1071338+92_set?a=a&size=3000,3000&extend=300,300,300,300&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"*/}
                {/*            className="card-img-top"*/}
                {/*            alt="..."*/}
                {/*        />*/}
                {/*        <div>Limited edition magnolia charm</div>*/}
                {/*        <div>$570</div>*/}
                {/*    </div>*/}
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
                        <div style={{ paddingTop: "0.5rem" }}>WOMEN SILK</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_WATCH_049573WW00?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>WATCHES</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_MFASHJEW_BRACELET_077242FP02?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>FASHION JEWELRY</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_JEWLERY_EARRINGS_222514B_00?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>JEWELRY</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_HOME_BEACH_103583M_02?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>BATH AND BEACH</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_WFASHACCESS_HAT_231039N_60?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>HATS</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_FRAGRANCE_107758V0?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>FRAGRANCES</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesedito/P_11_CH2_SHOES_SANDALS_202230Z_2K?fit=wrap%2C0&wid=360"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>WOMEN SHOES</div>
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
                        style={{ height: "85%", width: "79vw" }}
                        src="https://assets.hermes.com/is/image/hermesedito/P_169_AH22_F_Badges-1?name=P_169_AH22_F_Badges-1&end?fit=wrap,0&wid=1280"
                        alt=""
                    />
                </div>
                <div className="content-zem"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "2rem",
                        padding: "2rem 9.5rem"
                    }}
                >
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesproduct/368101H42V_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>"Coups de Goua'H" swim trunks</div>
                        <div>$560</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesproduct/231051N+02_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>Fred Look at Mi bucket hat</div>
                        <div>$415</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesproduct/221824ZH45_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>Izmir sandal</div>
                        <div>$740</div>
                    </div>
                    <div className="card" style={{ width: "100%", border: "none" }}>
                        <img
                            src="https://assets.hermes.com/is/image/hermesproduct/703203FK01_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"
                            className="card-img-top"
                            alt="..."
                        />
                        <div style={{ paddingTop: "0.5rem" }}>Clic HH So Black bracelet</div>
                        <div>$740</div>
                    </div>
                </div>
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
                        <div style={{ width: "90%" }}>
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/231031N+FV_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"
                                className="card-img-top"
                                alt="..."
                            />
                            <div>Arizona hat</div>
                            <div>$870</div>
                        </div>
                        <div style={{ width: "90%" }}>
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/079065CAAA_set?a=a&size=3000,3000&extend=300,300,300,300&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"
                                className="card-img-top"
                                alt="..."
                            />
                            <div>Orange Bag charm</div>
                            <div>$480</div>
                        </div>
                        <div style={{ width: "90%" }}>
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/400210M+03_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"
                                className="card-img-top"
                                alt="..."
                            />
                            <div>Oseraie Color round tray</div>
                            <div>$2,475</div>
                        </div>
                        <div style={{ width: "90%" }}>
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/046031P_set?a=a&size=3000,3000&extend=0,0,0,0&align=0,0&$product_item_grid_g$&resMode=&wid=650&hei=650"
                                className="card-img-top"
                                alt="..."
                            />
                            <div>Soleil d’Hermès mug n°1</div>
                            <div>$210</div>
                        </div>
                    </div>
                </div>


        </>
    )
}
