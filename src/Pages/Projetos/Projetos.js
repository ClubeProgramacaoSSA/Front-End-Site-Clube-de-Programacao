import React from 'react';
import './projeto.scss';
import ProjBox from '../../Components/ProjBox/ProjBox';
import ProjBox2 from '../../Components/ProjBox2/ProjBox';
import ProjBox3 from '../../Components/ProjBox3/ProjBox';

function Projetos() {
    return (
        
        <div className="container"> 
            <div className="texto-intro text-center slide-top">
                <h1 className='display-2 text-uppercase'>Projetos</h1>
                <p className='display-7'>

                    O clube de progamação do SENAI/CIMATEC além de realizar torneios e aulas, também desenvolve projetos com os integrantes.
                    Indo de websites, até programas funcionais para resolver determinados problemas. A maior parte dos projetos de código são disponibilizada no 
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ClubeProgramacaoSSA"> GitHub </a>, e podem ser acessados
                    pelos links abaixo. Outras documentações ou vídeos podem ser acessadas pelo <a target="_blank"
                    rel="noopener noreferrer" href=''> Google Drive </a> do clube. Aqui estarão registrados os principais projetos que a equipe do Clube já realizou.
       
                </p>
            </div>
            <ProjBox className='auxiliar'/>
            <ProjBox2 className='auxiliar'/>
            <ProjBox3 className='auxiliar' />

        </div>
        
        
    )
}

export default Projetos