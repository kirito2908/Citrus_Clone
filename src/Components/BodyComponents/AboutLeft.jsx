import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTumblr } from "react-icons/fa";

export const AboutLeft = () => {
    return (
        <>
            <div className="hexagon">
                <img src="/assets/CEO.jpg" alt="CEO" />
            </div>
            <div className="nameAndPosition">
                <h4>SKYLER WHITE</h4>
                <h5>CEO & Founder</h5>
            </div>
            <div className="ceoDiscription">
                <p>Saleem naijar kaasram eerie can be disbursed in the wofl like of a fox that is her thing smaoasa lase lemedds laasd pamade eleifend sapien</p>
            </div>
            <div className="ceoAccounts">
                <a href='/' className="twitter"><FaTwitter /></a >
                <a href='/' className="facebook"><IoLogoFacebook /></a >
                <a href='/' className="instagram"><IoLogoInstagram /></a >
                <a href='/' className="dunno"><FaTumblr /></a >
            </div>
            <div className="readMore">
                <button type='button'>Read More</button>
            </div>
        </>
    )
}
