import React from "react";
import {Form} from "formik";


export function Header() {
    return (
        <>

        <header id="header" className="header d-flex align-items-center">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a className="logo d-flex align-items-center">
                    <div className="pnj">
                        <img src="anh/tempsniplolo.png"
                             style={{textAlign: "center", alignItems: "center", maxHeight: "6rem"}} alt=""/>
                    </div>
                </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <Form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <a type="submit"><i className="fa-sharp fa-solid fa-magnifying-glass"/></a>
                            </Form>

                        </li>
                        <li><a href="#hero" className="active">Trang Chủ</a></li>
                        <li><a href="">Tin Tức</a></li>
                    </li>

                    <li><i style={{margin: "0 0.5rem"}} className="fa-sharp fa-solid fa-bag-shopping"/>Cart</li>
                    <li><i style={{margin: "0 0.5rem"}} className="fa-solid fa-user"/>Account</li>
                </ul>
            </nav>

            <i onClick={() => mobileNavToggle()}
               className="fa-solid fa-bars mobile-nav-toggle mobile-nav-show bi bi-list"/>
            <i onClick={() => mobileNavToggle()}
               className="fa-solid fa-xmark mobile-nav-toggle mobile-nav-hide d-none bi bi-x"/>

        </div>
        </header>


</>

)}
function mobileNavToggle() {
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    console.log(mobileNavHide);

    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');

}