import { ReactNode } from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full flex-row shadow-[0_20px_30px_rgba(251,147,4,0.2)]">
      <div className="flex flex-row justify-end items-center pr-10 gap-4 w-full h-16 border-b-2 border-orange shadow-[inset_0_70px_60px_rgba(169,169,169,0.2)] bg-black ">
        <NavLink
          to="/"
          className="
          rounded-md
          text-orange 
          flex 
          items-center
          flex-col 
          text-center 
          font-bold 
          text-base
          px-2
          hover:bg-gray-600
          "
        >
          Home
        </NavLink>
        <NavLink
          to="/sobrenos"
          className="text-orange flex  px-2 rounded-md
          items-center text-center font-bold text-base 
          hover:bg-gray-600">
          Sobre Nos
        </NavLink>
        <NavLink
          to="/projects"
          className=" px-2 rounded-md
          hover:bg-gray-600 text-orange flex items-center text-center font-bold text-base">
          Projetos
        </NavLink>
        <NavLink
          to="/workshops"
          className="
          rounded-md px-2 hover:bg-gray-600 text-orange flex items-center text-center font-bold text-base">
          Workshops
        </NavLink>
        <NavLink to="/login"
          className="
           text-[#232323] flex items-center text-center font-bold text-base bg-orange px-4 py-1 rounded-2xl duration-300 hover:text-yellow-50">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
