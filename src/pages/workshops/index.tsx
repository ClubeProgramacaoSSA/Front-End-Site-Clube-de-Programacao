// import { useState, useEffect } from "react";
import { Tabs } from "./components/Tabs";
import { api } from "./api";

//* API DE TESTE
export interface Content {
  workshop: string;
  alt: string;
  logoUrl: string;
  avatarUrl: string;
  content: string;
  videoUrl: string;
  pdfUrl: string;
  social: string;
  avatarName: string;
  title: string;
}

export function WorkShops() {
  //! Aguardando Back-End

  // const [workShops, setWorkShops] = useState<Content[]>([]);

  // useEffect(() => {
  //   fetch("url")
  //     .then((response) => response.json())
  //     .then((data) => setWorkShops(data));
  // }, []);

  return (
    <main className="max-w-xs m-auto text-white flex flex-col items-center">
      <h1 className="font-bold text-4xl mt-8">
        Work<span className="text-[#FB9304]">shops</span>
      </h1>
      <p className="font-medium text-center mt-10 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam
        asperiores nesciunt doloremque beatae ab adipisci quisquam, sed quae
        temporibus
      </p>
      <Tabs data={api} />
    </main>
  );
}
