import React, {useEffect, useState} from "react";
import "../css/header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router";
// import {SideBar} from "./SideBar";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {useFashion} from "../contexts/FashionContext";

export function Header() {
    const {quantityCard, setQuantityCard} = useFashion();
    const [isLogin, setIsLogin] = useState();
    const token = localStorage.getItem('token');
    const currentUserName = localStorage.getItem('username');
    const currentRole = localStorage.getItem('role');

    // const [decodedToken, setDecodedToken] = useState("");
    const [username, setUsername] = useState(currentUserName);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    useEffect(() => {
        if (token) {
            setIsLogin(true);
        } else {
            // Xử lý khi không có token trong localStorage
        }
    }, [token]);

    useEffect(() => {
        if (token) {
            setIsLogin(true);
            setUsername(currentUserName)
        } else {
            // Xử lý khi không có token trong localStorage
        }
    }, [token, currentUserName]);


    const handlerLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        setIsLogin(false);
        toast.success("Logout successfully !!!");
        navigate("/login")
    };





    const navigate = useNavigate();
    return (
        <>
            <header id="header" className="header d-flex align-items-center">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <div className="col-md-4">
                    {/*    <SideBar/>*/}
                    {/*        /!*<input style={{border :"1px solid black"}} type="text"/>*!/*/}
                    {/*        /!*<button><i className="fa-sharp fa-solid fa-magnifying-glass fa-lg"></i></button>*!/*/}
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <a onClick={() => navigate("/")} className="logo d-flex align-items-center">
                            <div className="pnj">
                                <img
                                    src="/anh/logo.png"
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
                                    <NavLink to={'/list'} onClick={ () => mobileNavToggle()}>Product</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/post'} onClick={ () => mobileNavToggle()}>Magazine</NavLink>
                                </li>
                                <li>
                                    <NavLink  to={'/'} onClick={() => {

                                        mobileNavToggle();
                                    }}>
                                        Home
                                    </NavLink>
                                </li>
                                {/*<li>*/}
                                {/*    <a href="blog.html">*/}
                                {/*        News*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                <li>
                                    {isLogin ?
                                        (
                                            <>
                                            <div className="dropdown">
                                                <button
                                                    className={'btn-user'}
                                                    style={{backgroundColor: "white",color:"black !importance",display:"flex",}}
                                                    aria-expanded="false"
                                                    type="button"  >
                                                    <div style={{backgroundColor:"whiteSmoke",height:"35px",width:"35px",borderRadius:"50px"}}>
                                                        <i className="fa-regular fa-circle-user fa-xl"></i>
                                                    </div>
                                                    <i className="fa-solid fa-caret-up fa-rotate-180"></i>
                                                </button>

                                                <ul className="user-login dropdown-menu dropdown-menu-dark">
                                                    <li>
                                                        <a className="user-content dropdown-item active" href="#">
                                                            <i style={{fontSize:"20px"}} className="fa-solid fa-user-tie"></i>
                                                            {username}
                                                        </a>
                                                    </li>

                                                    <li>
                                                        {
                                                           token ?
                                                                (  <Link to="/information"
                                                                         style={{ color: "black",fontSize:"18px",gap:"16px"}}>
                                                                    <i  style={{fontSize:"20px"}} className="fa-solid fa-info"></i> Information user</Link>)
                                                                : ''
                                                        }
                                                    </li>

                                                    <li>
                                                        {
                                                            token ?
                                                                (  <Link to="/history"
                                                                         style={{ color: "black",fontSize:"18px",gap:"16px"}}>
                                                                    <i   style={{fontSize:"20px"}}  className="fa-solid fa-list"></i>Transaction history</Link>)
                                                                : ''
                                                        }
                                                    </li>
                                                        <li>
                                                        {
                                                           currentRole == "ROLE_ADMIN" ?
                                                               (  <Link to="/nav/manager/list" className="dropdown-item "
                                                                        style={{ color: "black",fontSize:"18px",gap:"16px"}}><i
                                                                   style={{fontSize:"16px"}}     className="fa-solid fa-list-check"/>Manage store</Link>)
                                                           : ''
                                                        }
                                                    </li>
                                                    <li>
                                                        <a className=" user-content dropdown-item" href="#">

                                                            <a className="dropdown-item " onClick={() => handlerLogout()}
                                                               style={{ color: "black",fontSize:"18px",gap:"20px",padding:"0px" }}>
                                                                <i style={{fontSize:"20px"}}  className="fa-solid fa-right-from-bracket"></i>Logout</a>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <Link to="/login" className='font-a-header' onClick={mobileNavToggle}>
                                                    <i style={{fontSize:"20px"}} className="fa-solid fa-user fa-2xl"/>Login</Link>

                                            </>
                                        )
                                    }
                                </li>
                                <li
                                    onClick={() => {
                                    navigate('/cards')
                                    mobileNavToggle();
                                }}
                                    style={{display:"flex",gap:"5px"}} className={'responsive-cart'}>

                                     <div>
                                        <i className="fa-sharp fa-solid fa-bag-shopping" />
                                        {quantityCard > 0 && <sup>{quantityCard}</sup>}
                                    </div>
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
            <ToastContainer />


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