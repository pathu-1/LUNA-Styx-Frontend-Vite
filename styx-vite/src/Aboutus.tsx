import React from "react";
import { Element } from "react-scroll";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import BeforeImage from "/images/before.jpg";
import AfterImage from "/images/after.png";

const FIRST_IMAGE = {
    imageUrl: '/images/before.jpg'
};

const SECOND_IMAGE = {
    imageUrl: '/images/after.png'
};

const Aboutus = () => {
    return (
        <>
            <Element className="aboutus_section" name="aboutus">
                <div className="section_heading">
                    about us
                </div>
                <div className="aboutus_content">
                    <div className="aboutus_content_text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam minus optio molestias laboriosam eligendi ratione mollitia doloribus culpa atque ipsum voluptate nulla, minima distinctio quos laborum delectus possimus inventore. Ad, exercitationem aperiam ea ipsa libero quaerat natus! Non dicta nostrum optio officiis? Necessitatibus eos sint doloribus voluptatem perspiciatis sunt soluta commodi laudantium dolorum architecto a, eaque vel iusto similique quod officiis cumque? Tempora repellat saepe iure sapiente dolore voluptas accusamus illo enim, tenetur nemo quis beatae laborum animi asperiores modi molestias. Vel eos libero deleniti enim perspiciatis aspernatur, deserunt, dolorem quaerat id reprehenderit dolorum eum praesentium. Dolor illum excepturi veniam nisi doloribus! Eos perferendis, beatae placeat quaerat laborum, suscipit fugiat officia eius nostrum dolorum fuga! Minima distinctio adipisci aliquid commodi nobis eos, voluptate mollitia beatae praesentium, nihil dolores deleniti voluptatum quod, sint iusto porro blanditiis similique asperiores quia! Qui iusto, voluptas quis officiis sint quia ducimus? Ratione, sit quae? Vero.
                    </div>
                </div>
                <div className="before_after_container">
                    <ReactBeforeSliderComponent
                        firstImage={FIRST_IMAGE}
                        secondImage={SECOND_IMAGE}
                        className="before_after_component"
                    />
                </div>
            </Element>
        </>
    )
}

export default Aboutus;