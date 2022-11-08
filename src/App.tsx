import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Page2} from "./Pages/Page2";
import {Page1} from "./Pages/Page1";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/Page1"} element={<Page1/>}/>
                <Route path={"/Page2"} element={<Page2/>}/>

                <Route path={"*"} element={<Navigate to={"/Page1"}/>}/>
            </Routes>
        </BrowserRouter>
    );
}