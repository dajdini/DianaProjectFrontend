import React from 'react'
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './InfoSection.css';

function InfoSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart
}) {
    
    return (
        <>
            <div 
            className={lightBg ? 'info_info-section' : 'info_info-section darkBg'}
            >
            <div className="container">
                <div className="row info_info-row"
                style={{display: 'flex', direction: imgStart ===
                'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="info_info-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'info_info-subtitle' : 'info_info-subtitle dark'}>
                            {description}</p>
                            <Link to="/sign-up">
                            <Button buttonSize='btn--wider' buttonColor='red'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                       <div className="info_info-img-wrapper">
                           <img src={img} alt={alt} className="info_info-img"/>
                        </div> 
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default InfoSection
