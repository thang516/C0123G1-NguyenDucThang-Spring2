import "./fonts/material-icon/css/material-design-iconic-font.min.css";
import "./css/style.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import React from "react";
import {useNavigate} from "react-router";

export function LoginNew() {
    const navigate = useNavigate();
    return (
        <>

            <div className="main">
                {/*/!* Sign up form *!/*/}
                {/*<section className="signup">*/}
                {/*    <div className="container">*/}
                {/*        <div className="signup-content">*/}
                {/*            <div className="signup-form">*/}
                {/*                <h2 className="form-title">Sign up</h2>*/}
                {/*                <form method="POST" className="register-form" id="register-form">*/}
                {/*                    <div className="form-group">*/}
                {/*                        <label htmlFor="name">*/}
                {/*                            <i className="zmdi zmdi-account material-icons-name"/>*/}
                {/*                        </label>*/}
                {/*                        <input*/}
                {/*                            type="text"*/}
                {/*                            name="name"*/}
                {/*                            id="name"*/}
                {/*                            placeholder="Your Name"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="form-group">*/}
                {/*                        <label htmlFor="email">*/}
                {/*                            <i className="zmdi zmdi-email"/>*/}
                {/*                        </label>*/}
                {/*                        <input*/}
                {/*                            type="email"*/}
                {/*                            name="email"*/}
                {/*                            id="email"*/}
                {/*                            placeholder="Your Email"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="form-group">*/}
                {/*                        <label htmlFor="pass">*/}
                {/*                            <i className="zmdi zmdi-lock"/>*/}
                {/*                        </label>*/}
                {/*                        <input*/}
                {/*                            type="password"*/}
                {/*                            name="pass"*/}
                {/*                            id="pass"*/}
                {/*                            placeholder="Password"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="form-group">*/}
                {/*                        <label>*/}
                {/*                            <i className="zmdi zmdi-lock-outline"/>*/}
                {/*                        </label>*/}
                {/*                        <input*/}
                {/*                            type="password"*/}
                {/*                            name="re_pass"*/}
                {/*                            id="re_pass"*/}
                {/*                            placeholder="Repeat your password"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="form-group">*/}
                {/*                        <input*/}
                {/*                            type="checkbox"*/}
                {/*                            name="agree-term"*/}
                {/*                            id="agree-term"*/}
                {/*                            className="agree-term"*/}
                {/*                        />*/}
                {/*                        <label htmlFor="agree-term" className="label-agree-term">*/}
                {/*<span>*/}
                {/*  <span/>*/}
                {/*</span>*/}
                {/*                            I agree all statements in{" "}*/}
                {/*                            <a href="#" className="term-service">*/}
                {/*                                Terms of service*/}
                {/*                            </a>*/}
                {/*                        </label>*/}
                {/*                    </div>*/}
                {/*                    <div className="form-group form-button">*/}
                {/*                        <input*/}
                {/*                            type="submit"*/}
                {/*                            name="signup"*/}
                {/*                            id="signup"*/}
                {/*                            className="form-submit"*/}
                {/*                            defaultValue="Register"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                </form>*/}
                {/*            </div>*/}
                {/*            <div className="signup-image">*/}
                {/*                <figure>*/}
                {/*                    <img*/}
                {/*                        src="https://kenh14cdn.com/203336854389633024/2022/10/28/photo-2-1666955381296926775038.jpg"*/}
                {/*                        alt="sing up image"*/}
                {/*                    />*/}
                {/*                </figure>*/}
                {/*                <a href="#" className="signup-image-link">*/}
                {/*                    I am already member*/}
                {/*                </a>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/* Sing in  Form */}
                <section className="sign-in">
                    <div className="containerss">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure>
                                    <img
                                        // https://kenh14cdn.com/203336854389633024/2022/10/28/photo-2-1666955381296926775038.jpg

                                        src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"
                                        alt="sing up image"
                                    />
                                </figure>
                                <a href="#" className="signup-image-link">
                                    Create an account
                                </a>
                            </div>
                            <div className="signin-form">
                                <h2 className="form-title">Log In</h2>

                                <Formik initialValues={{
                                    username: "",
                                    password: ""

                                }}

                                        validationSchema={Yup.object({
                                            username: Yup.string().required("Please fill in all the information"),
                                            password: Yup.string().required("Please fill in all the information"),
                                        })}
                                        onSubmit={async (values, {setSubmitting}) => {

                                            try {
                                                const response = await
                                                    axios.post("http://localhost:8080/api/user/authenticate", values);

                                                if (response.data.token) {
                                                    localStorage.setItem("token", response.data.token);
                                                    localStorage.setItem("username", response.data.username);
                                                    localStorage.setItem("role", response.data.role);
                                                }
                                                // Đăng nhập thành công, chuyển hướng hoặc thực hiện hành động khác
                                                navigate("/");
                                                toast.success(`Login successfully !!!`)
                                            } catch (e) {
                                                // Xử lý lỗi đăng nhập
                                                toast.error(e.response.data);
                                            } finally {
                                                setSubmitting(false);
                                            }
                                        }}>


                                    <Form method="POST" className="register-form" id="login-form">

                                        <div className="form-group">
                                            <label htmlFor="your_name">
                                                <i className="zmdi zmdi-account material-icons-name"/>
                                            </label>
                                            <Field
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                            />
                                            <ErrorMessage name="username" component="span" className="form-err"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="your_pass">
                                                <i className="zmdi zmdi-lock"/>
                                            </label>
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                            />
                                            <ErrorMessage name="password" component="span" className="form-err"/>
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="checkbox"
                                                name="remember-me"
                                                id="remember-me"
                                                className="agree-term"
                                            />
                                            <label htmlFor="remember-me" className="label-agree-term">
                <span>
                  <span/>
                </span>
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="form-group form-button">
                                            <button
                                                type="submit"
                                                className="form-submit"
                                                defaultValue="Log in"
                                            >Log In</button>
                                        </div>
                                    </Form>

                                </Formik>


                                <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                        <li>
                                            <a href="#">
                                                <i className="display-flex-center zmdi zmdi-facebook"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="display-flex-center zmdi zmdi-twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="display-flex-center zmdi zmdi-google"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <ToastContainer/>

        </>
    )

}