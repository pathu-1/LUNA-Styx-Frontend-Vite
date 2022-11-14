import React from "react";
import { Element } from "react-scroll";
import Card from "./components/Card";
import TensorflowImage from "/images/1.png";
import MetaverseImage from "/images/2.png"
import PaymentImage from "/images/3.png"

const Features = () =>{
    return(
        <>
            <Element className="features_section" name="features">
                <div className="section_heading">
                    features
                </div>
                <div className="feature_cards">
                    <Card 
                        card_image={TensorflowImage} 
                        card_content_heading="neural networks"
                        card_content="app transforms the nst image is with NNets with tensorflow backend"
                    />
                    <Card 
                        card_image={MetaverseImage} 
                        card_content_heading="meta ready"
                        card_content="app is ready for meta verse with integrations like blockchain & AR"
                    />
                    <Card 
                        card_image={PaymentImage} 
                        card_content_heading="neobank integration"
                        card_content="app has own decentarlized neobank which can make ethereum transcations easy"
                    />
                </div>
            </Element>
        </>
    )
}

export default Features;