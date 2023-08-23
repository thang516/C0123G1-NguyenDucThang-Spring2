import React, {useEffect, useState} from "react"
import "../css/list.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
// import {IconButton} from '@chakra-ui/react'
// import {LeftCircleTwoTone} from '@ant-design/icons';
// import {RightCircleTwoTone} from '@ant-design/icons';
import {useNavigate} from "react-router";
import * as service from "../service/ProductService"

// import {getAll} from "../service/ProductService";
import {Link} from "react-router-dom";
import {FormattedNumber} from "react-intl";
import {Field, Formik, Form} from "formik";
// import {Select} from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import Box from "@mui/material/Box";


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
            if(res){
                setProducts(res.content)
            }

        }
        getAllProduct();
    }, [sortBy, price, color, typeProduct, nameProduct])


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
                            style={{border: "none"}} className=" dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Type Product
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light">
                            <li><span className={`dropdown-item ${typeProduct === '' ? 'active' : ''}`}  onClick={() => setTypeProduct('')} >All</span></li>
                            {
                                productTypes && productTypes.map((p) => (

                                    <li key={p.id}>
                                <span onClick={() => setTypeProduct(p.nameType)}
                                      className={`dropdown-item ${typeProduct === p.nameType ? 'active' : ''}`}>
                                {p.nameType}
                                </span>
                                    </li>
                                ))

                            }


                        </ul>
                    </div>


                    <div className="dropdown">
                        <button
                            style={{border: "none"}} className=" dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Color
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light">

                            <li><span className={`dropdown-item ${color === '' ? 'active' : ''}`}  onClick={() => setColor('')} >All</span></li>
                            {
                                colorFilter && colorFilter.map((pr, index) => (

                                    <li key={index}>
                                        <span onClick={() => setColor(pr.nameColor)}
                                              className={`dropdown-item ${color === pr.nameColor ? 'active' : ''}`}>
                                            {pr.nameColor}
                                        </span>
                                    </li>
                                ))
                            }


                        </ul>
                    </div>


                    <div className="dropdown">
                        <button
                            style={{border: "none"}}
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

                            </li>
                            <li>
                                <a onClick={() => setPrice('500-1000')} className="dropdown-item">
                                    500$-1000$
                                </a>
                            </li>
                            <li>

                            </li>
                            <li>
                                <a onClick={() => setPrice('1001')} className="dropdown-item">
                                    1000$
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>


                <div className="dropdown">
                    <button
                        style={{border: "none"}}
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

                        </li>
                        <li>
                                <span onClick={() => setSortBy('highToLow')} className="dropdown-item">
                                    High To Low
                                </span>
                        </li>

                    </ul>
                </div>
            </div>


            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton style={{padding: "7px 36px"}}>
                            <Box as="span" flex='1' textAlign='left'>
                                Search
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Formik initialValues={{
                            nameProduct: ""
                        }}
                                onSubmit={(values) => {

                                    const search = async () => {
                                        const res = await service.getAll(page, typeProduct, values.nameProduct)
                                        setProducts(() => res.content)
                                        setNameProduct(() => values.nameProduct)
                                    }

                                    search();
                                }}>

                            <Form className="d-flex"
                                  style={{marginTop: "20px", marginBottom: "20px", justifyContent: "flex-end"}}>
                                <Field
                                    style={{backgroundColor: "white", width: " 30%", marginRight: "20px"}}
                                    className="form-control" type="text" placeholder="Search by name product"
                                    name='nameProduct'/>
                                {/*<button className="btn btn-secondary my-2 my-sm-0"*/}
                                {/*        type="submit"*/}
                                {/*        style={{backgroundColor: "black", marginRight: "20px"}}>*/}
                                {/*    Search*/}
                                {/*</button>*/}
                                <button type="submit">
                                    <i className="fa-sharp fa-solid fa-magnifying-glass"/>
                                </button>
                                {/*<button className="btn btn-secondary my-2 my-sm-0" style={{backgroundColor: "black"}}*/}
                                {/*>*/}
                                {/*    Back*/}
                                {/*</button>*/}
                            </Form>

                        </Formik>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>


            <div className="carousel-containers">


                {products?.length === 0 && nameProduct !== "" ? (
                        <div>
                            <h4 className={"text-danger"}>
                                No products found
                            </h4>
                        </div>
                    ) :
                    (

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
                        ))
                    )}
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