import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {Detail} from "./component/Detail";
import React from "react";

import {Route, Routes} from "react-router";
import {Home} from "./component/Home";
import {Cards} from "./component/Cards";
import {List} from "./component/List";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";
import {Login} from "./component/login/Login";
import {CustomerList} from "./component/CustomerList";
import FashionProvider from "./contexts/FashionContext";
// import {LoginNew} from "./component/loginNew/LoginNew";

function App() {
    return (
        <FashionProvider>
            <ChakraProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cards" element={<Cards/>}/>
                    <Route path="/list" element={<List/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/detail/:id" element={<Detail/>}/>
                    {/*<Route path="/test" element={<LoginNew/>}/>*/}
                    <Route path="/detail" element={<Detail/>}/>
                    <Route path="/nav/manager" element={<CustomerList/>}/>
                </Routes>
                <Footer/>
            </ChakraProvider>
        </FashionProvider>


    );
}

export default App;
