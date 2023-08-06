import './CardItem.scss';
import React, {useState} from "react";

export function CardItem({setQuantity, totalQuantity}) {
    const [currentQuantity, setCurrentQuantity] = useState(totalQuantity);
    const handlePlusMinus = (step) => {
        setCurrentQuantity(prev => prev + step);
        setQuantity(prev => prev + step);
    }
    // const [totalMoney , setTotalMoney] = useState(1);

    return <div className={'card-item-container'}>
        <div className={'card-item-left'}>
            <img src="https://assets.hermes.com/is/image/hermesproduct/beltkit-32?$leatherstrap=073967CAEG_composite_2&$buckle=081751CUZ3_front_1"
                 alt=""/>
        </div>
        <div className={'card-item-right'}>
            <div className={'title'}>
                <p>Series 8 case & Band Apple Watch Hermès Single Tour 45 mm H Diagonal</p>
             <button> <i  className="fa-sharp fa-light fa-x fa-lg"></i></button>
            </div>



            <div className={'money'}>
                <div className="detail">
                    <span>Color: gold</span>
                    <span>Ref. H0009481 01LCW | H0008671J37</span>
                </div>
                <div className={'box'}>
                    <button disabled={currentQuantity === 1} type="button" className="minus" onClick={()=> handlePlusMinus(-1)}><span>-</span></button>
                    <span>{currentQuantity}</span>
                    <button type="button" value="+" className="plus" onClick={()=> handlePlusMinus(1)}><span>+</span></button>
                </div>
                <div className={'price'}>
                    <span>1111</span>
                </div>
            </div>

        </div>

    </div>;

}