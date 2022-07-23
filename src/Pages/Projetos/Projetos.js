import React from 'react';
import './projeto.scss';
import ProjBox from '../../Components/ProjBox/ProjBox';

function Projetos() {
    return (


        
    <div className="container"> 

            <div className="texto-intro text-center slide-top">
                <h1 className='display-2 text-uppercase'>
                    <span>P</span>ROJETOS
                </h1>

                <p className='display-7'>

                    O clube de progamação do SENAI/CIMATEC além de realizar torneios e aulas, também desenvolve projetos com os integrantes.
                    Indo de websites, até programas funcionais para resolver determinados problemas. A maior parte dos projetos de código são disponibilizada no 
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ClubeProgramacaoSSA"> GitHub </a>, e podem ser acessados
                    pelos links abaixo. Outras documentações ou vídeos podem ser acessadas pelo <a target="_blank"
                    rel="noopener noreferrer" href=''> Google Drive </a> do clube. Aqui estarão registrados os principais projetos que a equipe do Clube já realizou.
       
                </p>
            </div>

            <ProjBox 
            title="ALGORITMOS"
            text="O projeto de Algoritmos foi desenvolvido para oferecer uma extensão e um ponto de apoio aos
            estudantes do curso de Engenharia da Computação e dos demais cursos que possuem algum contato
            com a programação, ofertando aulas e atividades para exercitar a lógica."
            image={require('../../Img/Algoritmos01.png')}
            className='auxiliar'
            />

            <ProjBox 
            title="SBC"
            text="O projeto SBC envolve o incentivo aos instagrantes a participarem dos torneios da Sociedade
            Brasileira de Computação, a fim de não apenas dar visibilidade ao Clube e a instituição CIMATEC, como
            buscar talentos na área de programação competitiva."
            image={require('../../Img/SBC.png')}
            className='auxiliar'
            />

            <ProjBox 
            title="Monitoria"
            text="O projeto Monitoria envolve a realização de aulas introdutórias de lógica de programação para os calouros
            do curso de Engenharia da Computação."
            image={require('../../Img/Aulas.png')}
            className='auxiliar'
            />

    </div>
    )
}

export default Projetos