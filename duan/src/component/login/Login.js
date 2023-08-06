import "./login.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router";
import React from "react";
import {ErrorMessage, Field, Formik, Form} from "formik";

import * as Yup from "yup"
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
    const navigate = useNavigate();


    return (
        <>


            <div className={'bodys'}>
                <div className="containerss" id="container">
                    <div className="form-container sign-up-container">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="form-container sign-in-container">

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
                                    } catch (e) {
                                        // Xử lý lỗi đăng nhập
                                        toast.error(e.response.data);
                                    } finally {
                                        setSubmitting(false);
                                    }
                                }}>


                            <Form className={'form-css'} method="post">
                                <h1>Sign in</h1>
                                <div className="social-container">
                                    <a target="_blank" href="https://www.facebook.com/login" className="social">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a target="_blank"
                                       href="https://accounts.google.com/v3/signin/identifier?dsh=S-620441123%3A1683428936102701&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=Af_xneEc8PQTSbaMIf2sScal0D9KR61xHn7dFKPh78o9ufeN1ap7uS5Marsw4K2cT_ViE-y6Zzwm&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                                       className="social">
                                        <i className="fab fa-google-plus-g"/>
                                    </a>
                                    <a target="_blank" href="https://www.instagram.com/" className="social">
                                        <i className="fab fa-linkedin-in"/>
                                    </a>
                                </div>
                                <span className={'span-css'}> or use your account</span>
                                <Field className={'input-css'} type="text" placeholder="User Name" name="username"
                                       defaultValue="" autoFocus=""/>
                                <ErrorMessage name="username" component="span" className="form-err"/>
                                <Field className={'input-css'} name="password" type="password" placeholder="Password"/>
                                <ErrorMessage name="password" component="span" className="form-err"/>
                                <a style={{padding :"10px 0"}} href="#">Forgot your password?</a>
                                <button className={'button-css'} type="submit">Sign In</button>
                            </Form>
                        </Formik>


                    </div>


                    <div className="overlay-container">
                        <img  src="https://kenh14cdn.com/203336854389633024/2022/10/28/photo-2-1666955381296926775038.jpg" alt=""/>
                        {/*<div className="overlay">*/}
                        {/*    <div className="overlay-panel overlay-left">*/}
                        {/*        /!*        <button class="ghost" id="signIn">Sign In</button>*!/*/}
                        {/*    </div>*/}
                        {/*    <div className="overlay-panel overlay-right">*/}
                        {/*        <h1 style={{color: "white"}}>Hello, Friend!</h1>*/}
                        {/*        <p className={'p-css'} style={{color: "white"}}>*/}
                        {/*            Enter your personal details and start journey with us*/}
                        {/*        </p>*/}
                        {/*        <a>*/}
                        {/*            <button className=" button-css ghost">Sign Up</button>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                    </div>
                </div>

            </div>
            <ToastContainer/>

        </>
    )
}