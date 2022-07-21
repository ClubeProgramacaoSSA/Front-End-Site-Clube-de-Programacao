import React from 'react'
import './landbox.scss';
import FotoClube from '../../Img/landing1.png'

function LandBox() {
    return (
        <div className='divMain'>
            <div className="topText">
                <h1 className="firstText">"NÃO SEJA UM <span className='pato'>PATO</span>."</h1>
                <p className='subText'>~Mestre Facundes</p>
            </div>
            <img src={FotoClube} />
        </div>
    )
}

export default LandBox
