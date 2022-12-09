import { ReactNode } from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full flex-row shadow-[0_20px_30px_rgba(251,147,4,0.2)]">
      <div className="flex flex-row justify-end items-center pr-10 gap-8 w-full h-16 border-b-2 border-orange shadow-[inset_0_70px_60px_rgba(169,169,169,0.2)] bg-black ">
        <NavLink to="/" className="text-orange flex items-center text-center font-bold text-base">
          Home
        </NavLink>
        <NavLink to="/sobrenos" className="text-orange flex items-center text-center font-bold text-base">
          Sobre Nos
        </NavLink>
        <NavLink to="/projects" className="text-orange flex items-center text-center font-bold text-base"> 
          Projetos
        </NavLink>
        <NavLink to="/workshops" className="text-orange flex items-center text-center font-bold text-base">
          Workshops
        </NavLink>
        <NavLink to="/login" className="text-[#232323] flex items-center text-center font-bold text-base bg-orange px-4 py-1 rounded-2xl hover:text-yellow-50">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
