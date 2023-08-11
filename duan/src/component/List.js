import React, {useEffect, useState} from "react"
import "../css/list.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import {IconButton} from '@chakra-ui/react'
import {LeftCircleTwoTone} from '@ant-design/icons';
import {RightCircleTwoTone} from '@ant-design/icons';
import {useNavigate} from "react-router";
import * as service from "../service/ProductService"
import {getAll} from "../service/ProductService";
import {Link} from "react-router-dom";
import {FormattedNumber} from "react-intl";



export function List() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(0);

    const [sortBy, setSortBy] = useState('');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [typeProduct, setTypeProduct] = useState('');
    const [nameProduct, setNameProduct] = useState('');

    const getAllProducts = async () => {
        const res = await service.getAll(page, sortBy, price, color, typeProduct, nameProduct);
        // setProducts(res.content);
        setTotalPages(res.totalPages);
        setPage(prevState => prevState + 1)
        setProducts([...products, ...res.content])
    }


    const getAllImg = async () => {
        const res = await service.getAllImg();
        // setImg(res);
    }


    useEffect(() => {
        getAllProducts();
        getAllImg()
    }, [])

    if (!products) {
        return null;
    }
    const paginate = (page) => {
        setPage(page)
    }


    return (
        <>

            <div className={'toggle-header'}>
                <div className={'menu'}>
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
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
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


                    {/*<div>*/}
                    {/*    <form className="d-flex" role="search">*/}
                    {/*        <input*/}
                    {/*            className="form-control me-2"*/}
                    {/*            type="search"*/}
                    {/*            placeholder="Search"*/}
                    {/*            aria-label="Search"*/}
                    {/*        />*/}
                    {/*        <a type="submit">*/}
                    {/*            <i className="fa-sharp fa-solid fa-magnifying-glass"/>*/}
                    {/*        </a>*/}
                    {/*        /!*<IconButton aria-label='Search database' icon={<SearchIcon />} />*!/*/}
                    {/*    </form>*/}
                    {/*</div>*/}


                    <div className="dropdown">
                        <button
                            style={{backgroundColor: "white", border: "none"}}
                            className=" dropdown-toggle"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
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

            <div className="carousel-containers">


                {
                    products && products.map((p, index) => (
                        // <div key={p.id} style={{height: "100%", width: "100%", position: "relative"}}
                        //      id={`carouselExampleFade-${index}`}
                        //      className="carousel slide carousel-fade">
                        //     <div className="carousel-inner">
                        //         {
                        //             img && img.map((item, i) => (
                        //                 <div key={p.id} className={`carousel-item ${i == 0 ? 'active' : ''}`}>
                        //                     <img key={item.id} src={item.imgURL} className="d-block w-100" alt="..."/>
                        //                 </div>
                        //             ))
                        //         }
                        //     </div>
                        //     <button className="carousel-control-prev" type="button"
                        //             data-bs-target={`#carouselExampleFade-${index}`}
                        //             data-bs-slide="prev">
                        //         <i style={{fontSize: " xx-large"}} className="fa-solid fa-chevron-left"/>
                        //         <span className="visually-hidden">Previous</span>
                        //     </button>
                        //     <button className="carousel-control-next" type="button"
                        //             data-bs-target={`#carouselExampleFade-${index}`}
                        //             data-bs-slide="next">
                        //         <i style={{fontSize: "xx-large"}} className="fa-solid fa-angle-right"/>
                        //         <span className="visually-hidden">Next</span>
                        //     </button>
                        //     <div>
                        //         <span>{p.nameProduct}</span>
                        //     </div>
                        //     <div>
                        //         <span>${p.price}</span>
                        //     </div>
                        // </div>

                        <div key={p.id} className="card">

                            <div className="card-img-top">
                                <Link to={`/detail/${p.id}/`}>
                                    <img src={p.images}/>

                                </Link>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    {p.nameProduct}
                                </p>
                                <p>$
                                    <FormattedNumber
                                        value={p?.price}
                                        currency="USD"
                                        minimumFractionDigits={0}>
                                    </FormattedNumber>

                                </p>
                            </div>
                        </div>
                    ))}
            </div>
            <div style={{textAlign: "center"}}>
                <button onClick={() => getAllProducts(page)}
                        style={{backgroundColor: "whiteSmoke", fontSize: "20px",    border: "1px solid", width: "95%",margin: "20px 0px"}}>Load more
                </button>
            </div>


        </>

    )
}