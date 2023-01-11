import Languages from "./components/Languages";
import Navbar from "./components/Navbar";
import ProfileInfo from "./components/ProfileInfo";
import TournamentHistory from "./components/TournamentHistory";

export default function PerfilPessoalAluno() {
    return (
        <div>
            <Navbar />
            <ProfileInfo />
            <Languages />
            <TournamentHistory />
        </div>
    );
}
