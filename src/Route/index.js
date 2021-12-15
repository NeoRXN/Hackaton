import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from '../components/home'
import Information from '../components/information';

const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} exact>
                </Route>
                <Route path="/information" element={<Information/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Pages;