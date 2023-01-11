import ProfilePicture from "../../../assets/png/profilePicture.png";

export default function ProfileInfo() {
    return (
        <div className="flex flex-col">
            <h1 className="m-auto mb-16 font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple to-orange">Hello, (Nome)!</h1>
            <img src={ProfilePicture} className="w-32 m-auto"></img>
            <ul className="text-center flex flex-col m-auto mt-4">
                <li className="text-white font-bold">A/E: 8.7</li>
                <li className="text-white font-bold">TORNEIOS: 5</li>
                <li className="text-white font-bold">TOP 5: 5</li>
            </ul>
        </div>
    );
}
