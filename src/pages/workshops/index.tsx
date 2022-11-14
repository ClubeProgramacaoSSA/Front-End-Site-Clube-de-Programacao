import { useState, useEffect } from "react";
import { api } from "../../utils/api-simulator";
import  axios  from "axios";
import { WorkshopList } from "./components/WorkshopList";

//* API DE TESTE
export interface ContentProps {
  workshopName: string;
  iconUrl: string;
  iconDescription: string;
  workshopTitle: string;
  workshopContent: string;
  memberName: string;
  memberAvatarUrl: string;
  memberSocialMidia: string;
  videoUrl: string;
  pdfUrl: string;
}

export function WorkShops() {
  //! Aguardando Back-End

  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData(){
      axios.post("http://localhost:8080/projects/projectType", { projectType: 'Desenvolvimento de Produto' })
      .then(({data}) => console.log(data))
      .catch((err) => console.error(err))
    }
    getData()
  }, [])

  useEffect(() => {
    console.log(data)
  
  }, [data])

  return (
    <main className="max-w-xs m-auto text-white flex flex-col items-center">
      <h1 className="font-bold text-4xl mt-8">
        Work<span className="text-orange">shops</span>
      </h1>
      <p className="font-medium text-center mt-10 text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam
        asperiores nesciunt doloremque beatae ab adipisci quisquam, sed quae
        temporibus
      </p>
      <WorkshopList workshops={api} />
    </main>
  );
}
