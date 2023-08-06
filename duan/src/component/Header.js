import React, {useEffect, useState} from "react";
import "../css/header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router";
import {SideBar} from "./SideBar";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
export function Header() {

    const [isLogin, setIsLogin] = useState();
    const token = localStorage.getItem('token');
    const currentUserName = localStorage.getItem('username');

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
                        <SideBar/>
                            {/*<input style={{border :"1px solid black"}} type="text"/>*/}
                            {/*<button><i className="fa-sharp fa-solid fa-magnifying-glass fa-lg"></i></button>*/}
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
                                <li>
                                    <a className="active" onClick={() => navigate("/")}>
                                        Home Page
                                    </a>
                                </li>
                                <li>
                                    <a href="blog.html">
                                        News
                                    </a>
                                </li>
                                <li>
                                    {isLogin ?
                                        (
                                            <>



                                            <div className="dropdown">
                                                <button
                                                    style={{backgroundColor: "white",color:"black !importance"}}
                                                    className=" dropdown-toggle"
                                                    type="button"    data-bs-toggle="dropdown"     aria-expanded="false"    >
                                                    <i className="fa-solid fa-user"></i>
                                                </button>
                                                <ul className="user-login dropdown-menu dropdown-menu-dark">
                                                    <li>
                                                        <a className="user-content dropdown-item active" href="#">
                                                            <i className="fa-solid fa-user"></i>
                                                            {username}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className=" user-content dropdown-item" href="#">

                                                            Account
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className=" user-content dropdown-item" href="#">

                                                            <a className="dropdown-item " onClick={() => handlerLogout()}
                                                               style={{ color: "black",fontSize:"18px" }}>
                                                                <i className="fa-solid fa-right-from-bracket"></i>Logout</a>
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <Link to="/login" className='font-a-header'>
                                                    <i style={{fontSize:"20px"}} className="fa-solid fa-user fa-2xl"/>Login</Link>

                                            </>
                                        )
                                    }
                                </li>
                                <li className={'responsive-cart'}>
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