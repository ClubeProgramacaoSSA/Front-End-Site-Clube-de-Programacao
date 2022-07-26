import React from 'react'
import './landbox.scss';

function LandBox(props) {
    return (
        <div className='divMain'>
            <div className="topText">
                <h1 className={props.align}>{props.title1}<span className='orangeText'>{props.title2}</span>{props.title3}</h1>
                <p className='subText'>{props.subtext}</p>
            </div>
            <img src={props.image}/>
        </div>
    )
}

export default LandBox
