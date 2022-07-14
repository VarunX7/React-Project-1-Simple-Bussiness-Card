import React from 'react'
import TwitterImg from '../images/Twitter Icon.png'
import FacebookImg from '../images/Facebook Icon.png'
import InstaImg from '../images/Instagram Icon.png'
import GitImg from '../images/GitHub Icon.png'

export default function Footer(){
    return(
        <div className="footer-container">
            <img src={TwitterImg} alt="" />
            <img src={FacebookImg} alt="" />
            <img src={InstaImg} alt="" />
            <img src={GitImg} alt="" />
        </div>
    )
}