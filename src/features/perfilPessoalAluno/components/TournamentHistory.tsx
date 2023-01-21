export default function TournamentHistory() {
    return (
        <div className="mt-[4rem] mb-[2rem] flex flex-col">
            <p className="m-auto mb-[1.2rem] text-white text-[1.4rem]">//histórico de torneios</p>
            <ul className="flex flex-col h-[11rem] m-auto overflow:hidden overflow-y-scroll text-white">
                <li className="py-[0.2rem] text-center rounded-[5px] mb-[1rem] bg-orange w-[20rem]">Nome - xx/xx/xx - Acertos/Erros - Pts</li>
                <li className="py-[0.2rem] text-center rounded-[5px] mb-[1rem] bg-purple w-[20rem]">Nome - xx/xx/xx - Acertos/Erros - Pts</li>
                <li className="py-[0.2rem] text-center rounded-[5px] mb-[1rem] bg-orange w-[20rem]">Nome - xx/xx/xx - Acertos/Erros - Pts</li>
                <li className="py-[0.2rem] text-center rounded-[5px] mb-[1rem] bg-purple w-[20rem]">Nome - xx/xx/xx - Acertos/Erros - Pts</li>
                <li className="py-[0.2rem] text-center rounded-[5px] mb-[1rem] bg-orange w-[20rem]">Nome - xx/xx/xx - Acertos/Erros - Pts</li>
                <li className="py-[0.2rem] text-center rounded-[5px] mb-[1rem] bg-purple w-[20rem]">Nome - xx/xx/xx - Acertos/Erros - Pts</li>
                <li className="py-[0.2rem] text-center rounded-[5px] mb-[1rem] bg-orange w-[20rem]">Nome - xx/xx/xx - Acertos/Erros - Pts</li>
                <li className="py-[0.2rem] text-center rounded-[5px] mb-[1rem] bg-purple w-[20rem]">Nome - xx/xx/xx - Acertos/Erros - Pts</li>
                <li className="py-[0.2rem] text-center rounded-[5px] mb-[1rem] bg-orange w-[20rem]">Nome - xx/xx/xx - Acertos/Erros - Pts</li>
                <li className="py-[0.2rem] text-center rounded-[5px] mb-[1rem] bg-purple w-[20rem]">Nome - xx/xx/xx - Acertos/Erros - Pts</li>
            </ul>
            <button className="m-auto mt-[2.5rem] mb-[2rem] rounded-[3rem] text-lg font-bold w-[12rem] h-[3rem] text-white bg-gradient-to-r from-purple to-orange">Adicionar Torneio</button>
        </div >
    );
}
