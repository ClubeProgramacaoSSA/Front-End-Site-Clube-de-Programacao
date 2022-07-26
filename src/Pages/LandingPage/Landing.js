import React from 'react';
import './landing.scss';
import LandBox from '../../Components/LandBox/LandBox';
import DefaultIcon from '../../Img/defaulticon.png'
import Divider from '../../Img/Divider.png'
import LogoSenai from '../../Img/logosenai.png'
import Footer from '../../Img/footer.png'

function Landing() {
    return (
        <div className="containerA">
            <LandBox
                align="firstTextL"
                title1='"NÃO SEJA UM'
                title2=" PATO"
                title3='."'
                subtext="~Mestre Facundes"
                image={require('../../Img/landing1.png')}
            />
            <LandBox
                align="firstTextR"
                title1='"SOBRE'
                title2=" NÓS"
                title3='."'
                subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                image={require('../../Img/landing2.png')}
            />
            <LandBox
                align="firstTextL"
                title1='"NOSSA'
                title2=" EQUIPE"
                title3='."'
                subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <div className="scroller">
                <div className='membro'>
                    <img className='imgMembro' src={DefaultIcon} alt="" />
                    <span>Nome Sobrenome</span>
                </div>
                <div className='membro'>
                    <img className='imgMembro' src={DefaultIcon} alt="" />
                    <span>Nome Sobrenome</span>
                </div>
                <div className='membro'>
                    <img className='imgMembro' src={DefaultIcon} alt="" />
                    <span>Nome Sobrenome</span>
                </div>
                <div className='membro'>
                    <img className='imgMembro' src={DefaultIcon} alt="" />
                    <span>Nome Sobrenome</span>
                </div>
                <div className='membro'>
                    <img className='imgMembro' src={DefaultIcon} alt="" />
                    <span>Nome Sobrenome</span>
                </div>
                <div className='membro'>
                    <img className='imgMembro' src={DefaultIcon} alt="" />
                    <span>Nome Sobrenome</span>
                </div>
                <div className='membro'>
                    <img className='imgMembro' src={DefaultIcon} alt="" />
                    <span>Nome Sobrenome</span>
                </div>
            </div>
            <img src={Divider} alt='' />
            <div className='apoio'>
                <h1 className='textApoio'>NOSSOS <span className='orangeText'>APOIADORES</span></h1>
                <div className='apoioContainer'>
                        <img className='senai' src={LogoSenai} alt='' />
                        <img className='apoioCircle' src={DefaultIcon} alt='' />
                        <img className='apoioCircle' src={DefaultIcon} alt='' />
                        <img className='apoioCircle' src={DefaultIcon} alt='' />
                </div>
            </div>
            <img src={Footer} alt='' />
        </div>


    )
}

export default Landing