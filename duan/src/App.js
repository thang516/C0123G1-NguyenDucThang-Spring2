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
// import {Login} from "./component/login/Login";
import {CustomerList} from "./component/CustomerList";
import FashionProvider from "./contexts/FashionContext";
import {ListManager} from "./component/ListManager";
import {LoginNew} from "./component/loginNew/LoginNew";
import {OrderList} from "./component/order_and_orderDetail/OrderList";
import {InformationPerson} from "./component/InformationPerson";
import {Post} from "./Post";
import {PostsDetail} from "./component/PostsDetail";

function App() {
    return (
        <FashionProvider>
            <ChakraProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cards" element={<Cards/>}/>
                    <Route path="/list" element={<List/>}/>
                    {/*<Route path="/login" element={<Login/>}/>*/}
                    <Route path="/detail/:id" element={<Detail/>}/>
                    <Route path="/login" element={<LoginNew/>}/>
                    <Route path="/detail" element={<Detail/>}/>
                    <Route path="/information" element={<InformationPerson/>}/>
                    <Route path="/history" element={<OrderList/>}/>
                    <Route path="/post" element={<Post/>}/>
                    <Route path="/detailPost/:id" element={<PostsDetail/>}/>
                    <Route path="/nav/manager" element={<CustomerList/>}/>
                    <Route path="/nav/manager/list" element={<ListManager/>}/>
                </Routes>
                <Footer/>
            </ChakraProvider>
        </FashionProvider>


    );
}

export default App;
