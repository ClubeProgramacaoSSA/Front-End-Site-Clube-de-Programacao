import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <div className='navbar'>
            <h1>Clube de Programação</h1>
            
            <NavLink to ="/">Home</NavLink>
            <NavLink to ="/sobrenos">Sobre Nos</NavLink>
            <NavLink to ="/projetos">Projetos</NavLink>
            <NavLink to ="/torneios">Torneios</NavLink>
            <NavLink to ="/workshop">Workshop</NavLink>
        </div>

    );
}

export default NavBar