import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './components/home'
import Information from './components/information';

function App() {
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

export default App;