import React, {useEffect, useState} from "react";
import * as service from "../../service/ProductService"
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import "../order_and_orderDetail/history.css"
import {FormattedNumber} from "react-intl";
import {useNavigate, useParams} from "react-router";
import moment from "moment";
export function OrderList() {
    const [history, setHistory] = useState();
    const [orderDetails, setOrderDetails] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);
const param = useParams();
const navigate = useNavigate();
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const orderDetail = async (id) => {
        const res = await service.getOrderDetail(id);
        setOrderDetails(res);
        openModal();
    }
    useEffect(() => {

        const getAllHistory = async () => {
            try {
                const res = await service.getAllHistory();
                setHistory(res.data);
            }catch (e) {
                navigate("/")
            }

        }

        getAllHistory();

    }, [])


    if (!history) {
        return null;
    }
    console.log(history)
    return (
        <>
            <h1 style={{textAlign: "center",margin:"10px"}}>Transaction history</h1>
        <div style={{padding : "0px 70px"}}>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Customer</th>
                    <th>Total</th>
                    <th>Create Date</th>
                    <th>Status</th>
                    <th>Order Detail</th>
                </tr>
                </thead>
                <tbody>
                {
                    history && history.map((h, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{h.customers.name}</td>
                            <td>
                                $
                                <FormattedNumber
                                    value= {h.totalAmount}
                                    currency="USD"
                                    minimumFractionDigits={0}>
                                </FormattedNumber>
                            </td>
                            <td>
                                {
                                    moment(h?.createDate, 'YYYY/MM/DD').format('DD/MM/YYYY')
                                }
                            </td>

                            <td>Shipping</td>
                            <td>



                                <i onClick={() => orderDetail(h.id)}
                                   className="fa-sharp fa-solid fa-circle-info fa-lg"></i>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={history}
                                    contentLabel="Modal"
                                >
                                    <section className="table__body">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Stt</th>
                                                <th>Total Price</th>
                                                <th>Quantity</th>
                                                {/*<th>Total Price</th>*/}
                                                <th>Name Product</th>
                                                <th>Color  Product</th>
                                                <th>Name  Product Type</th>
                                                <th>Image</th>

                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                orderDetails && orderDetails.map((od,index) => (
                                                    <tr key={od.id}>
                                                        <td>{index +1}</td>
                                                        <td>$
                                                            <FormattedNumber
                                                                value={od.price}
                                                                currency="USD"
                                                                minimumFractionDigits={0}>
                                                            </FormattedNumber>
                                                        </td>
                                                        <td>{od.quantity}</td>
                                                        {/*<td>$*/}
                                                        {/*    <FormattedNumber*/}
                                                        {/*        value={od.orders.totalAmount}*/}
                                                        {/*        currency="USD"*/}
                                                        {/*        minimumFractionDigits={0}>*/}
                                                        {/*    </FormattedNumber>*/}
                                                        {/*</td>*/}
                                                        <td>{od.products.nameProduct}</td>
                                                        <td>{od.products.colors.nameColor}</td>
                                                        <td>{od.products.productType.nameType}</td>
                                                        <td>
                                                            <img src={od.products.img} alt=""/>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                    </section>
                                    <button onClick={closeModal} className='btn btn-success'>Close</button>
                                </Modal>
                            </td>
                        </tr>

                    ))

                }
                </tbody>
            </table>
        </div>

        </>
    )
}