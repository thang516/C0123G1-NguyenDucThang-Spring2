import React, {useEffect, useState} from "react"
import "../css/list.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import {useNavigate} from "react-router";
import * as service from "../service/Manager"
import {Link} from "react-router-dom";
import {FormattedNumber} from "react-intl";
import {Form,Formik,Field} from "formik";


export function ListManager() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [color, setColor] = useState('');
    const [typeProduct, setTypeProduct] = useState('');
    const [nameProduct, setNameProduct] = useState('');

    const getAllProducts = async () => {
        const res = await service.getAll(page, typeProduct, nameProduct);
        setProducts([...products, ...res.content])
    }
    console.log(products)

    useEffect(() => {
        const getAllProduct = async () => {
            const res = await service.getAll(page, typeProduct, nameProduct);
            setProducts(res.content)
        }
        getAllProduct();
    }, [])


    useEffect(() => {
        getAllProducts();

    }, [page])

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
                            Type Product
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light ">
                            <li>
                                <span onClick={() => setTypeProduct('Bath and beach')} className="dropdown-item active">
                                    Bath and beach
                                </span>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <span onClick={() => setTypeProduct('Blankets and pillows')} className="dropdown-item">
                                    Blankets and pillows
                                </span>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <span onClick={() => setTypeProduct('Eclectic clock')} className="dropdown-item">
                                    Eclectic clock
                                </span>
                            </li>

                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <span onClick={() => setTypeProduct('Hats and gloves')} className="dropdown-item">
                                    Hats and gloves
                                </span>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <span onClick={() => setTypeProduct('Ties, bow ties and pocket squares')}
                                      className="dropdown-item">
                                    Ties, bow ties and pocket squares
                                </span>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>

                            <li>
                                <span onClick={() => setTypeProduct('Silk scarves')} className="dropdown-item">
                                    Silk scarves
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
                <div>

                    <div>
                        <Formik initialValues={{
                            nameProduct: ""
                        }}
                                onSubmit={(values) => {
                                    console.log(values.nameProduct)
                                    const search = async () => {
                                        const res = await service.getAll(page,typeProduct,values.nameProduct)
                                        setProducts(()=> res.content)
                                        setNameProduct(()=> values.nameProduct)
                                    }

                                    search();
                                }}>

                            <Form className="d-flex"
                                  style={{marginTop: "20px", marginBottom: "20px", justifyContent: "flex-end"}}>
                                <Field
                                    style={{backgroundColor: "white", width: " 20vw", marginRight: "20px"}}
                                    className="form-control" type="text" placeholder="Search by name product"
                                    name='nameProduct'/>
                                <button className="btn btn-secondary my-2 my-sm-0"
                                        type="submit"
                                        style={{backgroundColor: "black", marginRight: "20px"}}>
                                    Search
                                </button>
                                <button className="btn btn-secondary my-2 my-sm-0" style={{backgroundColor: "black"}}
                                        >
                                    Back
                                </button>
                            </Form>

                        </Formik>

                    </div>


                </div>
            </div>

            <div className="carousel-containers">


                {
                    products && products.map((p, index) => (

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