/* eslint-disable indent */
import { useState, useEffect } from "react";
import { Layout } from "../../../components/Layout";
import { WorkshopList, WorkshopListProps } from "../components/WorkshopList";
import axios from "axios";

//* API DE TESTE
export interface ContentProps {
	descricao_projeto: string,
	descricao_imagem: string,
	dt_inicio: string,
	dt_termino_previsto: string,
	dt_termino: string,
	nome_projeto: string,
	url_github: string,
	tipo: string,
	nome_imagem: string,
	dt_imagem: string,
	url_imagem: string,
	nome_lider: string,
}

export function WorkShops() {

	const [data, setData] = useState<WorkshopListProps>();

	useEffect(() => {
		async function getData(){
		  axios.get("http://localhost:8080/projects/pertype/workshop")
		  .then(({ data }) => { setData(data); console.log(data); })
		  .catch((err) => console.error(err));
		}
		getData();
	  }, []);

	if(data != undefined)
	return (
		<Layout navbar>
			<main className="max-w-xs m-auto text-white flex flex-col items-center">
				<h1 className="font-bold text-4xl mt-8">
					Work<span className="text-orange">shops</span>
				</h1>
				<p className="font-medium text-center mt-10 text-xl">
				O clube de programação disponibiliza várias workshops para o aprendizado em programação e afins, confira algumas delas e se inscreva já!!!

				</p>
				<WorkshopList workshops = {data} />
			</main>
		</Layout>
	);
}
