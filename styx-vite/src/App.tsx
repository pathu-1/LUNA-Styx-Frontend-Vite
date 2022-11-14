import React from "react";
import Aboutus from "./Aboutus";
import Navbar from "./components/Navbar";
import Download from "./Download";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import "./index.css";

const App = () =>{
    return(
        <>
            <Navbar/>
            <Hero/>
            <Aboutus/>
            <Features/>
            <Download/>
            <Footer/>
        </>
    )
}

export default App;