import React from "react";
import "../css/header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router";
// import {SideBar} from "./SideBar";


export function Header() {
    const navigate = useNavigate();
    return (
        <>

            {/*<SideBar/>*/}
            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <div className="col-md-4">
                        <button style={{border : "none",backgroundColor:"white"}}>
                            <i className="fa-solid fa-bars fa-2xl"></i>
                        </button>

                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <a onClick={() => navigate("/")} className="logo d-flex align-items-center">
                            <div className="pnj">
                                <img
                                    src="anh/logo.png"
                                    style={{
                                        textAlign: "center",
                                        alignItems: "center",
                                        maxHeight: "6rem"
                                    }}
                                    alt=""
                                />
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <nav style={{justifyContent:"end"}} id="navbar" className="navbar">
                            <ul>
                                <li>
                                </li>
                                {/*<li>*/}
                                {/*    <a className="active" onClick={() => navigate("/")}>*/}
                                {/*        Trang Chủ*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="blog.html">*/}
                                {/*        Tin Tức*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                <li>
                                    <i style={{margin: "0 0.5rem"}} className="fa-solid fa-user"/>
                                    Account
                                </li>
                                <li>
                                    <i
                                        style={{margin: "0 0.5rem"}}
                                        className="fa-sharp fa-solid fa-bag-shopping"
                                    />
                                    Cart
                                </li>

                            </ul>
                        </nav>
                    </div>

                    <i onClick={() => mobileNavToggle()}
                       className="fa-solid fa-bars mobile-nav-toggle mobile-nav-show bi bi-list"/>
                    <i onClick={() => mobileNavToggle()}
                       className="fa-solid fa-xmark mobile-nav-toggle mobile-nav-hide d-none bi bi-x"/>
                </div>
            </header>


        </>

    )
}

function mobileNavToggle() {
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    console.log(mobileNavHide);

    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');

}