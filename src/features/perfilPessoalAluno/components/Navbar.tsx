import LogoClubeDeProgramacao from "../../../assets/png/logo-clube-de-programacao.png";

export default function Navbar() {
    return (
        <div className="h-32 flex flex-row items-center justify-between mx-8">
            <img src={LogoClubeDeProgramacao} className="w-20" />
            <a href="" className="text-white font-bold text-lg">Sair</a>
        </div>
    );
}
