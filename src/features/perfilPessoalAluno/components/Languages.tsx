import cpp from "../../../assets/png/C++.png"
import js from "../../../assets/png/JS.png"
import python from "../../../assets/png/Python.png"

export default function Languages() {
    return (
        <div className="mt-[4rem] flex flex-col">
            <p className="m-auto mb-[1.2rem] text-white text-[1.4rem]">//suas linguagens</p>
            <div className="m-auto flex items-center justify-center rounded-xl mb-[2rem] h-[1.5rem] w-[8rem] bg-gradient-to-r from-purple to-orange">
                <img src={cpp} className="w-[3rem]"></img>
            </div>
            <div className="m-auto flex items-center justify-center rounded-xl mb-[2rem] h-[1.5rem] w-[12rem] bg-gradient-to-r from-purple to-orange">
                <img src={js} className="w-[2.5rem]"></img>
            </div>
            <div className="m-auto flex items-center justify-center rounded-xl mb-[2rem] h-[1.5rem] w-[16rem] bg-gradient-to-r from-purple to-orange">
                <img src={python} className="w-[3rem]"></img>
            </div>
        </div>
    );
}
