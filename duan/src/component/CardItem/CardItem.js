import './CardItem.scss';
import React, {useEffect, useState} from "react";
import * as service from "../../service/ProductService";

// {setQuantity, totalQuantity}
export function CardItem() {

    const username = localStorage.getItem('username');

    const [shopping, setShopping] = useState([]);

    const getAllShopping = async () => {
        const res = await service.getAllShopping(username);
        setShopping(res)
    }

    const calculate = async (id,index,productId) => {
         await  service.calculate(id,index,productId);
        getAllShopping();
    }

    useEffect(() => {
        getAllShopping();
    }, [])

    // const [currentQuantity, setCurrentQuantity] = useState(totalQuantity);
    // const handlePlusMinus = (step) => {
    //     setCurrentQuantity(prev => prev + step);
    //     setQuantity(prev => prev + step);
    // }
    // // const [totalMoney , setTotalMoney] = useState(1);

    return (
        <>
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
                                <p>{s.products.nameProduct}</p>
                                <button><i className="fa-sharp fa-light fa-x fa-lg"></i></button>
                            </div>


                            <div className={'money'}>
                                <div className="detail">
                                    <span>Color: {s.products.colors.nameColor}</span>
                                    <span>Ref. H0009481 01LCW | H0008671J37</span>
                                </div>
                                {/*<div className={'box'}>*/}
                                {/*    <button disabled={currentQuantity === 1} type="button" className="minus"*/}
                                {/*            onClick={() => handlePlusMinus(-1)}><span>-</span></button>*/}
                                {/*    <span>{currentQuantity}</span>*/}
                                {/*    <button type="button" value="+" className="plus" onClick={() => handlePlusMinus(1)}>*/}
                                {/*        <span>+</span></button>*/}
                                {/*</div>*/}

                                <div className={'box'}>
                                    <button  type="button" className="minus"
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
        </>

    )
}