import {Link, useNavigate, useParams} from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import CreditScoreIcon from '@mui/icons-material/CreditScore';
import React, { useEffect, useState } from "react";
import * as service from '../service/ProductService';
import Swal from "sweetalert2";
import "../component/Information.css"
import { toast } from 'react-toastify';
import { PayPalButton } from "react-paypal-button-v2";
export function InformationPerson() {

    const [customer,setCustomer] = useState();
        const navigate = useNavigate();

    useEffect(() => {
        const detail = async  () => {
           try {
               const res = await service.detailCustomer();
               setCustomer(res.data);
           }catch (e) {
               return navigate("/login")

           }
        }
        detail()
    }, [])
    if(!customer){
        return  null
    }
    return(
        <>
            <div className="containerr" >
                <div className="avatar">
                    <img
                        src={customer.image}
                        alt=""
                    />
                </div>


                <div className="name">



                    <h1>{customer.name}</h1>
                    <div className="specialize">Hello every body !!</div>
                    <ul className="contact">
                        <li>
                            <span>P</span> {customer.phone}
                        </li>
                        <li>
                            <span>E</span> {customer.email}
                        </li>
                        <li>
                            <span>U</span> {customer.users.username}
                        </li>

                    </ul>
                </div>

                <div className="info">
                    <ul>
                        <li>
                            From <b>{customer.address}</b> - Việt Nam
                        </li>
                    </ul>
                </div>

                <div className="intro">
                    {/*<h2>Introduce yourself</h2>*/}

                </div>
            </div>
        </>
    )
}