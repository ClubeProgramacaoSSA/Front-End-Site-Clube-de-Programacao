import React from 'react';
import './landing.scss';
import LandBox1 from '../../Components/LandBox1/LandBox';
import LandBox2 from '../../Components/LandBox2/LandBox';
import LandBox3 from '../../Components/LandBox3/LandBox';

function Landing() {
    return (
        <div className="containerA">
            <LandBox1 />
            <LandBox2 />
            <LandBox3 />
        </div>


    )
}

export default Landing