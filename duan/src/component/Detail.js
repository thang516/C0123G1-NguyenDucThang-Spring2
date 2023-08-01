import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/detail.css"

export function Detail() {


    return (
        <>


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
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/stairs-hand-towel--103190M%2003-folded-wm-4-0-0-800-800_g.jpg"
                                alt=""/>
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
                    <div>
                        <div style={{display: "flex", justifyContent: "space-between",paddingTop : "2rem"}}>
                            <div>
                                color
                            </div>
                            <div>
                                color
                            </div>
                        </div>


                        <div style={{display: "flex", height: "3rem", justifyContent: "space-between"}}>
                            <div className="color-click" style={{display: "flex", paddingTop:"2rem",paddingLeft:"2rem"}}>
                                <div>
                                    <button
                                        style={{
                                            backgroundColor: "#d2756c",
                                            height: "2.5rem",
                                            width: "2.5rem",
                                            margin: "0 1rem"
                                        }}/>
                                </div>

                                <div>
                                    <button
                                        style={{
                                            backgroundColor: "#d2756c",
                                            height: "2.5rem",
                                            width: "2.5rem",
                                            margin: "0 1rem"
                                        }}/>
                                </div>

                                <div>
                                    <button
                                        style={{
                                            backgroundColor: "#d2756c",
                                            height: "2.5rem",
                                            width: "2.5rem",
                                            margin: "0 1rem"
                                        }}/>
                                </div>


                            </div>
                        </div>

                        <div style={{justifyContent: "center", textAlign: "center"}}>
                            <button style={{width: '18vw',marginTop:"3rem"}} className="btn btn-dark">Add to card</button>
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

                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        paddingTop: "2rem",
                        backgroundColor: "#f6f1eb"
                    }}>
                    <div style={{backgroundColor: "#fffcf7", height: "20rem", width: "63rem"}}>
                        <h4 style={{textAlign: "center", marginTop: "6rem"}}>The story behind</h4>
                        <p style={{textAlign: "center", justifyContent: "center", padding: " 0 10rem"}}>Bath linen is
                            making its
                            comeback this
                            season! Philippe Mouquet originally came up with the "Stairs" design for a tie motif in the
                            Spring-Summer
                            2010 collection. The design showcases adjoining Hs, climbing upwards like stairs. Featured
                            in
                            various
                            different sizes, the design introduces two new colorways: Griotte and Safran.</p>
                    </div>
                    <div>
                    </div>

                    <div>
                        <h4 style={{marginBottom: "-4rem", marginTop: "2rem"}}>The Perfect Partner</h4>
                        <div style={{display: "flex", marginTop: " 5rem", gap: "1rem"}}>
                            <div className="card" style={{width: "100%", border: "none", backgroundColor: " #f6f1eb"}}>
                                <img
                                    src="https://assets.hermes.com/is/image/hermesproduct/010124P_front_wm_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=400&hei=400"
                                    className="card-img-top" alt="..."/>
                                <div style={{paddingTop: "0.5rem"}}>
                                    Iskender highball glass
                                </div>
                                <div>$590</div>

                            </div>
                            <div className="card" style={{width: "100%",border: "none",backgroundColor: "#f6f1eb"}}>
                                <img
                                    src="https://assets.hermes.com/is/image/hermesproduct/311602M%2001_wornsquare_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=400&hei=400"
                                    className="card-img-top" alt="..."/>
                                <div style={{paddingTop: "0.5rem"}}>
                                    La Source de Pegase ashtray
                                </div>
                                <div>$660</div>
                            </div>
                            <div className="card" style={{width: "100%", border: "none", backgroundColor: "#f6f1eb"}}>
                                <img
                                    src="https://assets.hermes.com/is/image/hermesproduct/800618E%2001_worn_1?size=3000%2C3000&extend=0%2C0%2C0%2C0&align=0%2C0&$product_item_grid_g$&wid=400&hei=400"
                                    className="card-img-top" alt="..."/>
                                <div style={{paddingTop: "0.5rem"}}>
                                    Reversible dog mat
                                </div>
                                <div>$1,100</div>
                            </div>
                            <div className="card" style={{width: "100%", border: "none", backgroundColor: "#f6f1eb"}}>
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

        </>
    )


}