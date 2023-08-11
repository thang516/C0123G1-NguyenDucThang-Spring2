import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import * as service from "../service/ProductService";
import sweat from "sweetalert2";
import {useNavigate} from "react-router";
import ToastContainer from "react-bootstrap/ToastContainer";
import 'react-toastify/dist/ReactToastify.css'


export function CustomerList() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [totalPages, setTotalPages] = useState(0);

    const [page, setPage] = useState(0);

    const getAllCustomer = async () => {
        const res = await service.getAllCustomer(page);
        setCustomer(res.content)
          setTotalPages(res.totalPages);
        console.log(res)
    }



    useEffect(() => {
        getAllCustomer()
    }, [])


    const deleteById = async (id) => {
        await service.deleteById(id)
        sweat.fire({
            icon: "success",
            title: "SUCCESSFULLY",
            timer: "2000"
        })
        getAllCustomer();
    }


    function deleteProduct(id, name) {
        sweat.fire({
                icon: "warning",
                title: `Do you want to delete ${name} ?`,
                showCancelButton: true,
                confirmButtonText: "OK"
            }
        ).then(async (isDelete) => {
            if (isDelete.isConfirmed) {
                deleteById(id);

            }
        })

    }

    const paginate = (page) => {
        setPage(page)
    }


    return (

        <>
            <div style={{textAlign:"center"}}>
                <h1>Customer list</h1>
            </div>
           <div>
               <table className=" table table-striped">
                   <thead>
                   <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Address</th>
                       <th>Phone</th>
                       <th>Email</th>
                       <th>Username</th>
                       <th>Function</th>
                   </tr>
                   </thead>
                   <tbody>
                   {
                       customer && customer.map((p,index) => (
                           <tr key={p.id}>
                               <td>{index+1}</td>
                               <td>{p.name}</td>
                               <td>{p.address}</td>
                               <td>{p.phone}</td>
                               <td>{p.email}</td>
                               <td>{p.users.username}</td>

                               <td>
                                   <button  className="btn btn-light" onClick={() => deleteProduct(p.id, p.name)}>Xóa</button>
                               </td>

                           </tr>
                       ))}

                   </tbody>
               </table>
           </div>

            {
                <div className="d-flex col-12 justify-content-end">
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li hidden={page === 0} className="page-item ">
                                <button className="page-link" tabIndex={-1}
                                        onClick={() => paginate(page - 1)}>
                                    Trước
                                </button>
                            </li>


                            {
                                Array.from({length: totalPages}, (a, index) => index).map((page) => (
                                    <li className="page-item">
                                        <button className={page === page ? "page-link active" : "page-link"}
                                                key={page}
                                                onClick={() => paginate(page)}>
                                            {page + 1}
                                        </button>
                                    </li>
                                ))
                            }

                            <li hidden={page + 1 === totalPages}
                                className="page-item">
                                <button className="page-link" tabIndex={-1}
                                        onClick={() => paginate(page + 1)}>
                                    Sau
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

            }

            <button className={'btn btn-outline-success'} onClick={() => navigate("/create")}>
                Create
            </button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </>
    )
}
