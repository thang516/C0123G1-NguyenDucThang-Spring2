import React, {useEffect, useState} from "react"
import "../css/list.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import {useNavigate} from "react-router";
import * as service from "../service/Manager"
import {Link} from "react-router-dom";
import {FormattedNumber} from "react-intl";
import {Form,Formik,Field} from "formik";
import sweat from "sweetalert2";


export function ListManager() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);

    const [typeProduct, setTypeProduct] = useState('');
    const [nameProduct, setNameProduct] = useState('');

    const getAllProducts = async () => {
        try {
            const res = await service.getAll(page, typeProduct, nameProduct);
            setProducts([...products, ...res.data?.content])
        }catch (e) {
            navigate("/")
        }

    }

    const getAllProduct = async () => {
        try {
            const res = await service.getAll(page, typeProduct, nameProduct);
            setProducts(res.data?.content)
        }catch (e) {
            navigate("/")
        }

    }
    useEffect(() => {
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


    const deletePro = async (id, productId) => {
        await service.deleteById(id, productId)
        sweat.fire({
            icon: "success",
            title: "SUCCESSFULLY",
            timer: "2000"
        })
        getAllProduct();
    }


    function deleteProduct(id, nameProduct) {
        sweat.fire({
            icon: "warning",
            title: `Do you want to delete " ${nameProduct} " ?`,
            showCancelButton: true,
            confirmButtonText: "OK"
        }).then(async (isDelete) => {
            if (isDelete.isConfirmed) {
                deletePro(id)
            }
        })
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
                                        setProducts(()=> res.data.content)
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
                                {/*<div>*/}
                                {/*    <button><i style={{color : "red"}} className="fa-sharp fa-solid fa-trash fa-2xl"></i></button>*/}
                                {/*    <button><i className="fa-sharp fa-solid fa-pen-to-square fa-2xl"></i></button>*/}
                                {/*</div>*/}

                            </div>
                            <div style={{justifyContent: "space-evenly",display:"flex",paddingBottom:"10px"}}>
                                <button onClick={() => deleteProduct(p.id,p.nameProduct)}  className={"btn btn-danger"}>Delete</button>
                                <button className={"btn btn-success"}>Edit</button>

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