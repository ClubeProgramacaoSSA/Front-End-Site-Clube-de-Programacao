import React from 'react'
import './landbox.scss';
import FotoClube2 from '../../Img/landing2.png'

function LandBox() {
    return (
        <div className='divMain'>
            <div className="middle1Text">
                <h1 className="firstText">"SOBRE <span className='pato'>NÓS</span>."</h1>
                <p className='subText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img src={FotoClube2} />
        </div>
    )
}

export default LandBox
