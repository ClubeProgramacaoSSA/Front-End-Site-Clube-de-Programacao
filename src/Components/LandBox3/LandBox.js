import React from 'react'
import './landbox.scss';
import Divider from '../../Img/Divider.png'

function LandBox() {
    return (
        <div className='divMain'>
            <div className="middle2Text">
                <h1 className="firstText"><span className='pato'>"NOSSA </span>EQUIPE."</h1>
                <p className='subText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src={Divider} />
        </div>
    )
}

export default LandBox
