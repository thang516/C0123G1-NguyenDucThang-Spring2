import React, {useEffect, useState} from "react";
import "../css/cards.scss"
import {CardItem} from "./CardItem/CardItem";
import * as service from "../service/ProductService";
import sweat from "sweetalert2";
import {useFashion} from "../contexts/FashionContext";


export function Cards() {








    const {quantityCard, setQuantityCard} = useFashion();
    const username = localStorage.getItem('username');
    const [shopping, setShopping] = useState([]);
    const [totalPrice,setTotalPrice] = useState();
    const getAllShopping = async () => {
        const res = await service.getAllShopping(username);
        setShopping(res)
        const total = res.reduce((sum, current) => {
            return sum + current.amount
        },0);
        setQuantityCard(total);

        setTotalPrice(0);
        await  res.map( async(v,index) => {
            await setTotalPrice( prev => prev + v.price)
        })

    }

    const calculate = async (id,index) => {
        await  service.calculate(id,index);
        getAllShopping();
    }

    useEffect(() => {
        getAllShopping();
    }, [])



    // useEffect(() => {
    //     const sum = list.reduce((sum, current) => (sum + current.quantity), 0);
    //     setQuantity(sum)
    // }, [list]);

    const deleteById = async (id) => {
        await  service.deleteById(id)
        sweat.fire({
            icon: "success",
            title: "SUCCESSFULLY",
            timer: "2000"
        })
        getAllShopping()
    }

    // const setAmountCart = async (val,id,amounts) => {
    //     if(amounts > 1 || val == 1 ){
    //         await  service.updateAmountCart(val,id);
    //
    //     }
    //     getAllShopping();
    //
    // }


    function deleteShopping(id,nameProduct) {
        sweat.fire({
            icon: "warning",
            title: `Do you want to delete ${nameProduct} ?`,
            showCancelButton: true,
            confirmButtonText: "OK"
        }).then(async (isDelete) => {
            if(isDelete.isConfirmed){
                deleteById(id)
            }
        })
    }

    return (
        <>

            <div className={'card-container'}>
                <div className={'card-left'}>
                    <h4 className={'quantity'}>
                        {`You have ${quantityCard} items in your cart.`}
                    </h4>

                    {/*{*/}
                    {/*    list.map((item,index) => <CardItem key={index} totalQuantity={item.quantity} setQuantity={setQuantity}/>)*/}
                    {/*}*/}
                    {/*<CardItem/>*/}


                    {
                        shopping && shopping.map((s) => (


                            <div key={s.id} className={'card-item-container'}>

                                <div className={'card-item-left'}>
                                    <img
                                        src={s.products.img}
                                        alt=""/>
                                </div>
                                <div className={'card-item-right'}>
                                    <div className={'title'}>
                                        <p>{s.products.nameProduct}{s.id}</p>
                                        <button onClick={() => deleteShopping(s.id,s.products.nameProduct)}><i className="fa-sharp fa-light fa-x fa-lg"></i></button>
                                    </div>


                                    <div className={'money'}>
                                        <div className="detail">
                                            <span>Color: {s.products.colors.nameColor}</span>
                                            {/*<span>Ref. H0009481 01LCW | H0008671J37</span>*/}
                                        </div>
                                        {/*<div className={'box'}>*/}
                                        {/*    <button disabled={currentQuantity === 1} type="button" className="minus"*/}
                                        {/*            onClick={() => handlePlusMinus(-1)}><span>-</span></button>*/}
                                        {/*    <span>{currentQuantity}</span>*/}
                                        {/*    <button type="button" value="+" className="plus" onClick={() => handlePlusMinus(1)}>*/}
                                        {/*        <span>+</span></button>*/}
                                        {/*</div>*/}

                                        <div className={'box'}>
                                            <button disabled={s.amount === 1} type="button" className="minus"
                                                     onClick={() => calculate(s.id,0)}><span>-</span></button>
                                            <span>{s.amount}</span>
                                            <button type="button" value="+" className="plus"  onClick={() => calculate(s.id,1)}>
                                                <span>+</span></button>
                                        </div>
                                        <div className={'price'}>
                                            <span>${s.price}</span>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        ))
                    }


                    {/*<div className={'calculator first'}>*/}
                    {/*    <div className={'title'}>*/}
                    {/*        Subtual*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        $*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className={'calculator first'}>
                        <div className={'description'}>
                            <span className={'title'}>Shipping</span>
                            <div>Shipping costs will be calculated during checkout</div>
                        </div>
                        <span>-</span>
                    </div>

                    <div className={'calculator'}>
                        <div className={'description'}>
                            <span className={'title'}>Taxes</span>
                            <div> Taxes will be calculated during checkout</div>
                        </div>
                        <span>-</span>
                    </div>

                    <div  className={'calculator'}>
                        <span>TOTAL</span>
                        <span>${totalPrice}</span>
                    </div>
             <div style={{    height:" 10px",
                 width: "100%",
                 background: "#f6f1eb"}}>

             </div>
                    <div style={{textAlign: "center", justifyContent: "center", alignItems: "center",height:"5rem"}}>
                        {/*<div>*/}
                        <button style={{width: "15rem",backgroundColor:"#444444",margin:"20px"}} className="btn btn-dark">CheckOut</button>
                        {/*</div>*/}
                    </div>
                </div>

                <div className={'card-right'}>
                    <div className={'description'}>
                        <h4>The orange box</h4>
                        <div style={{width: "100%", display: "flex"}}>
                            <div style={{width: "30%"}}>
                                <img src="https://assets.hermes.com/is/image/hermesedito/orange-box?name=orange-box&end"
                                     alt=""/>
                            </div>
                            <div style={{width: " 70%"}}>
                                <div style={{paddingLeft: "3rem"}}>
                                    All orders are delivered in an orange box tied with a Bolduc ribbon, with the
                                    exception of certain items
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="customer-service">
                        <h4>Customer Service</h4>
                        <div style={{marginTop: "1rem"}}>
                            <i className="fa-sharp fa-solid fa-phone"/><span> +84 782 391 943</span>
                            <div style={{padding: " 0 2rem"}}>Monday to Friday: 9am - 6pm EST</div>
                            <div style={{padding: " 0 2rem"}}>Saturday: 10am - 6pm EST</div>
                        </div>

                        <div className={'methods'}>
                            <div className={'method'}>
                                <i className="fa-solid fa-truck"/>
                                <span>Standard</span>
                                <div>delivery</div>
                            </div>
                            <div className={'method'}>
                                <i className="fa-solid fa-arrow-right-arrow-left"/>
                                <div>Returns &</div>
                                <div>exchanges</div>
                            </div>
                            <div className={'method'}>
                                <i className="fa-solid fa-lock"/>
                                <p> Shop securely</p>

                            </div>
                        </div>

                        <div className={'payments'}>
                            <div>
                                <i className="fa-brands fa-cc-visa  fa-2xl"/>
                            </div>
                            <div>
                                <i className="fa-brands fa-cc-discover  fa-2xl"/>
                            </div>
                            <div>
                                <i className="fa-brands fa-cc-diners-club  fa-2xl"/>
                            </div>
                            <div>
                                <i className="fa-brands fa-cc-jcb fa-2xl"/>
                            </div>
                            <div>
                                <i className="fa-brands fa-cc-amex fa-2xl"/>
                            </div>
                            <div>
                                <i className="fa-sharp fa-solid fa-money-bill fa-2xl"/>
                            </div>
                            <div>
                                <i className="fa-brands fa-pied-piper-pp fa-2xl"/>
                            </div>
                            <div>
                                <i className="fa-brands fa-cc-mastercard fa-2xl"/>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}