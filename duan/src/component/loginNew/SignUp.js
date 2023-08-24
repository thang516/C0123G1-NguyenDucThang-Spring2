import React from "react";

import "./fonts/material-icon/css/material-design-iconic-font.min.css";
import "./css/style.css";
import * as service from "../../service/ProductService"
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import React from "react";
import {useNavigate} from "react-router";
export  function SignUp() {




    return(
        <>
            <div className='main'>
                <section className="signup">
                    <div className="container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>


                                <Formik initialValues={{
                                    name : "",
                                    email : "",
                                    username : "",
                                    phone :"",
                                    password : ""

                                }}     validationSchema={Yup.object({
                                    name: Yup.string().required("Please fill in all the information"),
                                    email: Yup.string().required("Please fill in all the information"),
                                    username: Yup.string().required("Please fill in all the information"),
                                    phone: Yup.string().required("Please fill in all the information"),
                                    password: Yup.string().required("Please fill in all the information"),
                                })}

                                        onSubmit={(values) =>{
                                            const  create = async () => {
                                                await service.register(values);
                                            }
                                            create();

                                }}>

                                    <Form   className="register-form" id="register-form">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                <i className="zmdi zmdi-account material-icons-name"/>
                                            </label>
                                            <Field
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Your Name"
                                            />
                                            <ErrorMessage name="name" component="span" className="form-err"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                <i className="zmdi zmdi-email"/>
                                            </label>
                                            <Field
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email"
                                            />
                                            <ErrorMessage name="name" component="span" className="form-err"/>

                                        </div>
                                        <div className="form-group">
                                            <label >
                                                <i className="fa-solid fa-user-plus"></i>
                                            </label>
                                            <Field
                                                type="text"
                                                name="username"

                                                placeholder="Username"
                                            />
                                            <ErrorMessage name="name" component="span" className="form-err"/>

                                        </div>
                                        <div className="form-group">
                                            <label >
                                                <i className="fa-solid fa-phone-volume"></i>
                                            </label>
                                            <Field
                                                type="number"
                                                name="phone"

                                                placeholder="Phone"
                                            />
                                            <ErrorMessage name="name" component="span" className="form-err"/>

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pass">
                                                <i className="zmdi zmdi-lock"/>
                                            </label>
                                            <Field
                                                type="password"
                                                name="pass"
                                                id="pass"
                                                placeholder="Password"
                                            />
                                            <ErrorMessage name="name" component="span" className="form-err"/>

                                        </div>


                                        <div className="form-group">
                                            <label>
                                                <i className="zmdi zmdi-lock-outline"/>
                                            </label>
                                            <Field
                                                type="password"
                                                name="re_pass"
                                                id="re_pass"
                                                placeholder="Repeat your password"
                                            />
                                            <ErrorMessage name="name" component="span" className="form-err"/>

                                        </div>
                                        <div className="form-group">
                                            <Field
                                                type="checkbox"
                                                name="agree-term"
                                                id="agree-term"
                                                className="agree-term"
                                            />
                                            <ErrorMessage name="name" component="span" className="form-err"/>

                                            <label htmlFor="agree-term" className="label-agree-term">
                <span>
                  <span/>
                </span>
                                                I agree all statements in{" "}
                                                <a href="#" className="term-service">
                                                    Terms of service
                                                </a>
                                            </label>
                                        </div>
                                        <div className="form-group form-button">
                                            <Field
                                                type="submit"
                                                name="signup"
                                                id="signup"
                                                className="form-submit"
                                                defaultValue="Register"
                                            />
                                        </div>
                                    </Form>
                                </Formik>


                            </div>
                            <div className="signup-image">
                                <figure>
                                    <img
                                        src="https://kenh14cdn.com/203336854389633024/2022/10/28/photo-2-1666955381296926775038.jpg"
                                        alt="sing up image"
                                    />
                                </figure>
                                <a href="#" className="signup-image-link">
                                    I am already member
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Sing in  Form */}
            </div>
        </>
    )
}