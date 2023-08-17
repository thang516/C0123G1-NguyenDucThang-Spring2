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
import {log10} from "chart.js/helpers";


export function List() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [productTypes, setTypeProducts] = useState([]);
    const [colorFilter, setColorFilter] = useState([]);
    const [page, setPage] = useState(0);

    const [sortBy, setSortBy] = useState('highToLow');
    const [price, setPrice] = useState('');
    const [color, setColor] = useState('');
    const [typeProduct, setTypeProduct] = useState('');
    const [nameProduct, setNameProduct] = useState('');

    const getAllProducts = async () => {
        const res = await service.getAll(page, sortBy, price, color, typeProduct, nameProduct);
        setProducts([...products, ...res.content])
    }


    useEffect(() => {
        const getType = async () => {
            const res = await service.getAllType();
            setTypeProducts(res)
        }
        getType();
        const getColor = async () => {
            const res = await service.getColorFilter();
            setColorFilter(res)
        }
        getType();
        getColor();
    }, [])


    useEffect(() => {
        const getAllProduct = async () => {
            const res = await service.getAll(page, sortBy, price, color, typeProduct, nameProduct);
            setProducts(res.content)
        }
        getAllProduct();
    }, [sortBy, price, color, typeProduct])


    useEffect(() => {
        getAllProducts();

    }, [page])

    if (!products) {
        return null;
    }
    if (!productTypes) {
        return null;
    }

    const paginate = (page) => {
        setPage(page)
    }

    console.log(colorFilter)

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
                            Type Product
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light ">
                            {
                                productTypes && productTypes.map((p) => {
                                    return (
                                        <li key={p.id}>
                                    <span onClick={() => setTypeProduct(p.nameType)}
                                          className={`dropdown-item ${typeProduct === p.nameType ? 'active' : ''}`}>
                                    {p.nameType}
                                </span>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>


                    <div className="dropdown">
                        <button
                            style={{backgroundColor: "white", border: "none"}} className=" dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Color
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light">




                            {
                                colorFilter && colorFilter.map((pr,index) => (

                                   <li key={index}>
                                        <span onClick={() => setColor(pr.nameColor)} className={`dropdown-item ${color === pr.nameColor ? 'active' : ''}`}>
                                            {pr.nameColor}
                                        </span>
                                   </li>
                                ))
                            }


                            {/*<li>*/}
                            {/*    <a onClick={() => setColor('black')} className="dropdown-item active">*/}
                            {/*        Black*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <hr className="dropdown-divider"/>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a onClick={() => setColor('blue')} className="dropdown-item">*/}
                            {/*        Blue*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <hr className="dropdown-divider"/>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a onClick={() => setColor('orange')} className="dropdown-item">*/}
                            {/*        Orange*/}
                            {/*    </a>*/}
                            {/*</li>*/}

                            {/*<li>*/}
                            {/*    <hr className="dropdown-divider"/>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a onClick={() => setColor('pink')} className="dropdown-item">*/}
                            {/*        Pink*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <hr className="dropdown-divider"/>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a onClick={() => setColor('purple')} className="dropdown-item">*/}
                            {/*        Purple*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <hr className="dropdown-divider"/>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a onClick={() => setColor('yellow')} className="dropdown-item">*/}
                            {/*        Yellow*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <hr className="dropdown-divider"/>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a onClick={() => setColor('white')} className="dropdown-item">*/}
                            {/*        White*/}
                            {/*    </a>*/}
                            {/*</li>*/}

                            {/*<li>*/}
                            {/*    <hr className="dropdown-divider"/>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a onClick={() => setColor('red')} className="dropdown-item">*/}
                            {/*        Red*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button
                            style={{backgroundColor: "white", border: "none"}}
                            className=" dropdown-toggle"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Price
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light">
                            <li>
                                <span onClick={() => setPrice('0-500')} className="dropdown-item active">
                                    0$ - 500$
                                </span>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a onClick={() => setPrice('500-1000')} className="dropdown-item">
                                    500$-1000$
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a onClick={() => setPrice('1001')} className="dropdown-item">
                                    1000$
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
                        <ul className="dropdown-menu dropdown-menu-light">
                            <li>
                                <span onClick={() => setSortBy('lowToHigh')} className="dropdown-item active">
                                    Low To High
                                </span>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <span onClick={() => setSortBy('highToLow')} className="dropdown-item">
                                    High To Low
                                </span>
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
                <button onClick={() => setPage(prevState => prevState + 1)}
                        style={{
                            backgroundColor: "whiteSmoke",
                            fontSize: "20px",
                            border: "1px solid",
                            width: "95%",
                            margin: "20px 0px"
                        }}>Load more
                </button>
            </div>


        </>

    )
}