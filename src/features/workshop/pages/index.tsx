/* eslint-disable indent */
import { useState, useEffect } from "react";
import { Layout } from "../../../components/Layout";
import { WorkshopList, WorkshopListProps } from "../components/WorkshopList";
import axios from "axios";

//* API DE TESTE
export interface ContentProps {
	assunto: string
	descricao: string
	dt_imagem?: Date
	dt_inicio?: Date
	dt_termino?: Date
	dt_termino_previsto?: Date
	imagem?: string
	nome_imagem?: string
	nome_lider?: string
	nome_projeto: string
	tipo?: string
	url_github?: string
}

export function WorkShops() {

	const [data, setData] = useState<WorkshopListProps>({
		workshops: [
			{ assunto: 'Introducao a logica de programacao', descricao: 'Tentando introduzir os participantes a base da programacao', nome_projeto: 'Patorneio' }
		]
	});

	useEffect(() => {
		async function getData() {
			axios.get("http://localhost:8080/projects/WorkShop")
				.then(({ data }) => { setData(data); console.log(data); })
				.catch((err) => console.error(err));
		}
		getData();
	}, []);

	useEffect(() => {
		console.log(data);

	}, [data]);

	return (
		<Layout navbar>
			<main className="max-w-xs m-auto text-white flex flex-col items-center">
				<h1 className="font-bold text-4xl mt-8">
					Work<span className="text-orange">shops</span>
				</h1>
				<p className="font-medium text-center mt-10 text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam
					asperiores nesciunt doloremque beatae ab adipisci quisquam, sed quae
					temporibus
				</p>
				<WorkshopList workshops={data.workshops} />
			</main>
		</Layout>
	);
}
