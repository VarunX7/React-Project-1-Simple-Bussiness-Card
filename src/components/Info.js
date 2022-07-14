import React from 'react'
import girlImage from '../images/girl_img.png'
import linkedinImage from '../images/linkedin.png'
import mailImage from '../images/Mail.png'

export default function Info(){
    return(
        <div className='info-container'>
            <img src={girlImage} className='main-img' />
            <h1>Laura Smith</h1>
            <h4>Frontend Developer</h4>
            <h6>laurasmith.website</h6>
            <div className='buttons'>
                <button className='mail-btn'>
                    <img src={mailImage} alt="" srcset="" />
                    <span>Email</span>
                </button>

                <button className='lin-btn'>
                    <img src={linkedinImage} alt="" srcset="" />
                    <span>LinkedIn</span>
                </button>
            </div>
        </div>
    )
}
