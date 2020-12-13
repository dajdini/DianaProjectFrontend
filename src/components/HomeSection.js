import React from 'react'
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './HomeSection.css';

function HomeSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description,
    buttonLabel, img, alt, imgStart
}) {
    return (
        <>
            <div 
            className={lightBg ? 'home_home-section' : 'home_home-section darkBg'}
            >
            <div className="container">
                <div className="row home_home-row"
                style={{display: 'flex', direction: imgStart ===
                'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home_home-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <p className={lightTextDesc ? 'home_home-subtitle' : 'home_home-subtitle dark'}>
                            {description}</p>
                            <Link to="/sign-up">
                            <Button buttonSize='btn--wider' buttonColor='red'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                       <div className="home_home-img-wrapper">
                           <img src={img} alt={alt} className="home_home-img"/>
                        </div> 
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default HomeSection
