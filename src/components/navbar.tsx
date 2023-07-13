import { useState } from 'react';
import clubeLogo from '/png/logo-clube-de-programacao.png';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

function NavBar() {
  return (
    <>
      <nav
        className="w-full flex justify-between border-b-4 
        border-orange overflow-y-visible 
        relative py-12 px-16 font-inter mb-40 
        bg-gradient-to-b from-[#FFFFFF21] shadow-2xl shadow-[#FB930426]"
      >
        <ul className="flex justify-between w-1/3 text-4xl text-orange font-bold">
          <li>Home</li>
          <li>Projetos</li>
          <li>Workshops</li>
          {/* <li>Login</li>
          <li>Registrar</li> */}
        </ul>
        <img
          src={clubeLogo}
          alt="Logo do clube"
          className="absolute right-12 top-8 z-10 w-52"
        />
      </nav>
      {/* <p className="">Click on the Vite and React logos to learn more</p> */}
    </>
  );
}

export default NavBar;
