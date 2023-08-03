import logo from './logo.svg';
import './App.css';
import {Detail} from "./component/Detail";
import React from "react";

import {Route, Routes} from "react-router";
import {Home} from "./component/Home";
import {Cards} from "./component/Cards";
import {List} from "./component/List";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";

function App() {
    return (
        <>
            <Header/>
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/cards" element={<Cards/>}/>
                <Route path="/list" element={<List/>}/>


                <Route path="/detail" element={<Detail/>}/>

            </Routes>
            <Footer/>
        </>

    );
}

export default App;
