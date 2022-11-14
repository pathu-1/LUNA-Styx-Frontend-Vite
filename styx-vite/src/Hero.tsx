import React from "react";
import { Element } from "react-scroll";
import BakgroundImage from "/images/poster.jpg";


const Hero = () =>{
    return(
        <>
            <Element 
                className="hero_image" 
                name="hero"
                style={{
                    backgroundSize: "cover",
                    background: `url(${BakgroundImage})`
                }}
            >
                <div className="hero_poster_heading">
                    transform your images with our app
                </div>
                <div className="hero_poster_overview">
                    a meta ready app whichg helps in transforming images with neural networks
                </div>
            </Element>
        </>
    )
}

export default Hero;