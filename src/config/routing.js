import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./screens/about";
import Home from "./screens/home";


export default function Routing() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About/:id" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}