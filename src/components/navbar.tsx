import { useState } from 'react';
import clubeLogo from '/png/logo-clube-de-programacao.png';
import { Link } from 'react-router-dom';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

function NavBar() {
  return (
    <>
      <nav
        className=" border-b-4 w-full
        border-orange overflow-y-visible 
        fixed py-12 px-16 font-inter
        bg-gradient-to-b from-[#FFFFFF21] to-black shadow-2xl shadow-[#FB930426] z-10 bg-black"
      >
        {/* essa div abaixo so existe pra posicionar a logo */}
        <div className="relative w-full flex justify-between z-10">
          <ul className="flex justify-between w-1/3 text-4xl text-orange font-bold">
            <li className="cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <Link to="/projects">
              <li className="cursor-pointer">Projetos</li>
            </Link>
            <li className="cursor-pointer">Workshops</li>
            {/* <li>Login</li>
          <li>Registrar</li> */}
          </ul>
          <a href="/">
            <img
              src={clubeLogo}
              alt="Logo do clube"
              className="absolute right-12 -top-5 z-10 w-52 cursor-pointer"
            />
          </a>
        </div>
      </nav>
      {/* <p className="">Click on the Vite and React logos to learn more</p> */}
    </>
  );
}

export default NavBar;
