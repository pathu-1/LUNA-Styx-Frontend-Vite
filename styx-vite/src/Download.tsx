import React from "react";
import { Element } from "react-scroll";
import PlayStore from "/images/playstore.png";
import AppStore from "/images/appstore.png";
import ContentImage from "/images/content.png";
import StyleImage from "/images/style.png";

const Download = () =>{
    return(
        <>
            <Element name="download">
                <div className="section_heading">
                    download
                </div>
                <div className="download_section_wrapper">
                    <div className="download_left_wrapper">
                        <div className="download_left_wrapper_text">
                            download the styx app from the link given below app is available on both app store and play store.
                        </div>
                        <div className="download_left_wrapper_images">
                            <img src={PlayStore} className="app_download"/>
                            <img src={AppStore} className="app_download"/>
                        </div>
                    </div>
                    <div className="download_right_wrapper">
                        <img src={ContentImage}/>
                        <img src={StyleImage}/>
                    </div>
                </div>
            </Element>
        </>
    )
}

export default Download;