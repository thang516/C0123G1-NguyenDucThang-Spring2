import React from "react"
import "../css/list.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconButton } from '@chakra-ui/react'
import { LeftCircleTwoTone } from '@ant-design/icons';
import { RightCircleTwoTone } from '@ant-design/icons';
export function List() {

    return (
        <>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "10px  40px",
                    justifyContent: "space-between"
                }}>
                <div style={{justifyContent: "inherit", display: "flex"}}>
                    <div className="dropdown">
                        <button
                            style={{backgroundColor: "white", border: "none"}}
                            className=" dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Category
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light ">
                            <li>
                                <a className="dropdown-item active" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button
                            style={{backgroundColor: "white", border: "none"}}
                            className=" dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Material
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light">
                            <li>
                                <a className="dropdown-item active" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button
                            style={{backgroundColor: "white", border: "none"}}
                            className=" dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Pattern
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item active" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button
                            style={{backgroundColor: "white", border: "none"}}
                            className=" dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Color
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item active" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button
                            style={{backgroundColor: "white", border: "none"}}
                            className=" dropdown-toggle"
                            type="button"     data-bs-toggle="dropdown"    aria-expanded="false" >
                            Price
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item active" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>



                    <div>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <a type="submit">
                                <i className="fa-sharp fa-solid fa-magnifying-glass"/>
                            </a>
                            {/*<IconButton aria-label='Search database' icon={<SearchIcon />} />*/}
                        </form>
                    </div>








                    <div className="dropdown">
                        <button
                            style={{backgroundColor: "white", border: "none"}}
                            className=" dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Sort
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li>
                                <a className="dropdown-item active" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Separated link
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            




            <div className="carousel-containers" style={{padding: " 20px 50px"}}>
                <div style={{height: "100%", width: "100%", position: "relative"}} id="carouselExample"
                     className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/look-at-mi-swim-trunks--358100H601-worn-3-0-0-800-800_g.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/look-at-mi-swim-trunks--358100H601-worn-4-0-0-800-800_g.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/look-at-mi-swim-trunks--358100H601-worn-5-0-0-800-800_g.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                        <i style={{fontSize: "xx-large"}} className="fa-solid fa-chevron-left"/>
                        <span className="visually-hidden">Previous</span>
                        {/*<LeftCircleTwoTone />*/}
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                        <i style={{fontSize: "xx-large"}} className="fa-solid fa-angle-right"/>
                        <span className="visually-hidden">Next</span>
                        {/*<RightCircleTwoTone  />*/}
                    </button>

                    <div>
                        <span> Swim trunks with bicolor detail</span>
                    </div>
                    <div>
                        <span>$700</span>
                    </div>
                </div>


                <div style={{height: "100%", width: "100%", position: "relative"}} id="carouselExampleFade"
                     className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/pince-moi-swim-trunks--358100H50R-worn-1-0-0-800-800_g.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/pince-moi-swim-trunks--358100H50R-worn-3-0-0-800-800_g.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/pince-moi-swim-trunks--358100H50R-worn-4-0-0-800-800_g.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev">
                        <i style={{fontSize: " xx-large"}} className="fa-solid fa-chevron-left"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="next">
                        <i style={{fontSize: "xx-large"}} className="fa-solid fa-angle-right"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <div>
                        <span>"Look at Mi" swim trunks</span>
                    </div>
                    <div>
                        <span>$620</span>
                    </div>

                </div>

                <div style={{height: "100%", width: "100%", position: "relative"}} id="carouselExampleFade"
                     className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/pince-moi-swim-trunks--358100H50R-worn-1-0-0-800-800_g.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/pince-moi-swim-trunks--358100H50R-worn-3-0-0-800-800_g.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://assets.hermes.com/is/image/hermesproduct/pince-moi-swim-trunks--358100H50R-worn-4-0-0-800-800_g.jpg"
                                className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="prev">
                        <i style={{fontSize: " xx-large"}} className="fa-solid fa-chevron-left"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                            data-bs-slide="next">
                        <i style={{fontSize: "xx-large"}} className="fa-solid fa-angle-right"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <div>
                        <span>"Look at Mi" swim trunks</span>
                    </div>
                    <div>
                        <span>$620</span>
                    </div>
                </div>
                </div>


        </>
    )
}