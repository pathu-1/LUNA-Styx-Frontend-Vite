import React from "react";

const Card = ({card_image,card_content_heading, card_content}: {card_image: any,card_content_heading: string, card_content: string}) =>{
    return(
        <>
            <div className="card">
                <img src={card_image}/>
                <div className="card_content_heading">
                    {card_content_heading}
                </div>
                <div className="card_content">
                    {card_content}
                </div>
            </div>
        </>
    )
}

export default Card;