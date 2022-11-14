import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-scroll";

const Navbar = () =>{
    const [scroll, setScroll] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 50){
                setScroll(true);
            }
            else{
                setScroll(false);
            }
        })
    },[]);
    return(
        <>
            <div className={`navbar nav ${scroll && "nav_black"}`}>
                <div className="navbar_left">
                    <div className="navbar_logo">
                        styx
                    </div>
                </div>
                <div className="navbar_right">
                    <div className="navbar_links">
                        <Link to="hero" spy={true} smooth={true} offset={50} className="nav_link" activeClass="activated">home</Link>
                        <Link to="aboutus" spy={true} smooth={true} offset={50} className="nav_link" activeClass="activated">about us</Link>
                        <Link to="features" spy={true} smooth={true} offset={50} className="nav_link" activeClass="activated">features</Link>
                        <Link to="download" spy={true} smooth={true} offset={50} className="nav_link" activeClass="activated">download</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;