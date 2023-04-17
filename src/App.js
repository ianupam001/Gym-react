import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from './components/Navbar.js';
import Footer from "./components/Footer.js";
import Home from './pages/Home.js';
import ExcerciseDetail from "./pages/ExcerciseDetail.js";

const App = () => {
    return (
        <Box widht="400px" sx={{width:{xl:'1488px'}}} m='auto'>
            < Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExcerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
};

export default App;
