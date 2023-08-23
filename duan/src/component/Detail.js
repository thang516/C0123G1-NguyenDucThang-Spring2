import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/detail.css"
import * as service from "../service/ProductService"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Breadcrumb, BreadcrumbItem, BreadcrumbLink,
} from '@chakra-ui/react'
import {useNavigate, useParams} from "react-router";
import {useFashion} from "../contexts/FashionContext";
import {FormattedNumber} from "react-intl";
import {Link} from "react-router-dom";


export function Detail() {

    const {setQuantityCard} = useFashion();
    const navigate = useNavigate();
    const [product, setProduct] = useState();
    const [productNew, setProductNew] = useState();

    const [productSetColor , setProductSetColor] = useState();
    const [productColor, setProductColor] = useState();


    const colors = {
        red: '#FF0000',
        green: '#00FF00',
        blue: '#0000FF',
        yellow: '#FFFF00',
        black: '#000000',
        white: '#FFFFFF',
        purple: '#800080',
        pink: '#FFC0CB',
        orange: '#FFA500',
    };

    const [descriptions, setDescription] = useState([]);

    const [img, setImg] = useState([]);
    const [imgSel, setImgSel] = useState('');
    // const [imgMain,setImgMain] =useState();
    const param = useParams();


    const addToCart = async (product,amount) => {
        const value  = {
            ...product,
            img: imgSel,
            colors : {
                id:productSetColor.idColor,
                nameColor: productSetColor.colorName
            }
        }

           const res = await service.addToCart(value, amount)
               // .then(() => setQuantityCard(prev => prev + 1));
            if(res?.response?.status === 400){
                toast.error(`The product you purchased is out of stock`)
            }else {
                toast.success(` This item has been added to the cart `)

            }

    }




    const getProductNew = async () => {
        const res = await service.productNew();
        setProductNew(res)
    }

    const detailProduct = async () => {
        const res = await service.detailProduct(param.id);
        if(res && res[0]){
            setProduct(res[0].product);
            // setImgMain(res[0].imgURL);
            setImg(res);
            setImgSel(res[0].imgURL)
            await setDescription(res[0].product.description.split("."))
            colorInProduct(res[0].product.nameProduct);
        }
    }

    const colorInProduct = async (nameProduct) => {
        const res = await service.getColor(nameProduct);
        setProductColor(res)

    }
    const displayDetailNew = async (id) => {
        try {
            const res = await service.detailProduct(id);
            setProduct(res[0].product);
            setImg(res);
            setImgSel(res[0].imgURL)

            await setDescription(res[0].product.description.split("."))
            colorInProduct(res[0].product.nameProduct);
        }catch (e) {
            return e;
        }

    }

    useEffect(() => {
        detailProduct();
        getProductNew();
        // displayDetailNew()

    }, [])

    if (!product) {
        return null
    }
    if (!productNew) {
        return null
    }

    const handleAddCard = () => {
        addToCart(productSetColor, 1);
    }
    console.log(productSetColor)




    return (
        <>
            <div className="containers">
                <div className="content">
                    <div className="content-left">

                        <div className="content-select">
                            <div>
                                {
                                    img.map((im, index) => (
                                        <img onClick={() => setImgSel(im.imgURL)} key={index} src={im.imgURL} alt=""/>
                                    ))
                                }


                            </div>

                        </div>
                        <div style={{padding: "0 40px"}}>
                            <img src={imgSel} alt=""/>
                        </div>


                    </div>

                    <div className='main-content'>
                        {/*<div className='description'>*/}
                        {/*    <h4>The story behind</h4>*/}
                        {/*    <p>Bath linen is*/}
                        {/*        making its*/}
                        {/*        comeback this*/}
                        {/*        season! Philippe Mouquet originally came up with the "Stairs" design for a tie*/}
                        {/*        motif*/}
                        {/*        in*/}
                        {/*        the*/}
                        {/*        Spring-Summer*/}
                        {/*        2010 collection. The design showcases adjoining Hs, climbing upwards like*/}
                        {/*        stairs.*/}
                        {/*        Featured*/}
                        {/*        in*/}
                        {/*        various*/}
                        {/*        different sizes, the design introduces two new colorways: Griotte and*/}
                        {/*        Safran.</p>*/}
                        {/*</div>*/}
                        <div>
                        </div>

                        <h4 className="text-center" style={{marginTop: "3%"}}>The Perfect Partner</h4>

                        <div className="css-im  d-flex " style={{marginRight: "2.5rem", marginTop: "-5%", gap: "20px"}}>

                            {
                                productNew && productNew.map((p) => (

                                    <div key={p.id} style={{display: "flex", marginTop: " 5rem", gap: "1rem"}}>
                                        <div className="card"
                                             style={{width: "100%", border: "none", backgroundColor: " #f6f1eb"}}>
                                            <Link onClick={() => displayDetailNew(p.id)} >
                                                <img
                                                    src={p.images}
                                                    className="card-img-top" />

                                            <div style={{paddingTop: "0.5rem"}}>
                                                {p.nameProduct}
                                            </div>

                                            $<FormattedNumber
                                                value={p?.price}
                                                currency="USD"
                                                minimumFractionDigits={0}>
                                            </FormattedNumber>
                                            </Link>

                                        </div>
                                    </div>

                                ))
                            }

                        </div>
                    </div>
                </div>


                <div className="content-right">
                    <div className="body-right">
                        <h4>{product.nameProduct}</h4>
                        <div>
                            ${product.price}
                        </div>
                    </div>

                    <div style={{marginTop: "2rem"}}>
                        <div style={{display: "flex", justifyContent: "space-between", margin: "5px 0px"}}>
                            <div>
                                color
                            </div>
                            {/*<div>*/}
                            {/*    {product.colors.nameColor}*/}
                            {/*</div>*/}

                        </div>


                        <div style={{display: "flex", justifyContent: "center"}}>
                            <div className="color-click">


                                {

                                    productColor && productColor
                                        .filter((cl, index, self) => self.findIndex(c => c.id === cl.id) === index).map((cl,index) => (
                                            <div key={index} className={`choose-color `}>

                                                <button onClick={() => {
                                                    const abc = productColor.filter((item) => item.id == cl.id)
                                                    setImg(abc)
                                                    setImgSel(abc[0].imgURL)
                                                    setProductSetColor(abc[0])

                                                    // ${cl.id === p.nameType ? 'active' : ''}
                                                }}
                                                        style={{
                                                            backgroundColor: colors[cl.colorName],
                                                            height: "2.5rem",
                                                            width: "2.5rem",
                                                            borderBottom : `${productSetColor?.idColor == cl.idColor ? "5px solid" : ''}`
                                                        }}
                                                    // onClick={() => colorInProduct(product.nameProduct)}
                                                />
                                                <div>{cl.colorName}</div>
                                            </div>

                                        ))
                                }




                            </div>


                        </div>

                        <div style={{justifyContent: "center", textAlign: "center"}}>
                            <button onClick={handleAddCard} style={{marginTop: "2rem"}}
                                    className="btn btn-dark">Add to card
                            </button>
                        </div>
                        <div style={{paddingTop: "2rem"}}>
                            {descriptions.map((value, index) =>
                                <p key={index}><i style={{fontSize: "8px", margin: "0 2px"}}
                                                  className="fa-sharp fa-solid fa-circle fa-flip-horizontal fa-2xs"></i>{value}
                                </p>
                            )}
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
                                Your purchases are delivered in an orange box tied with a Bolduc ribbon, with
                                the
                                exception of fragrances, makeup and beauty products, books, certain equestrian
                                and
                                bulky items.
                                During checkout, you can include a card with a personalized message and a
                                priceless
                                invoice.
                                A customer can exchange a gift. For more details, please contact Customer
                                Service.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>


            </div>

        </>
    )
}
