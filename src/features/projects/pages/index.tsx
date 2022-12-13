/* eslint-disable indent */
//todo: criar o caminho para puxar os projetos do banco de dados
//todo: componentizar de forma padronizada a de jap
//todo: background mais dinamico
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Projbox } from "../components/projbox";
import { Layout } from "../../../components/Layout";
import { projectTypesProps } from "../components/projbox";

export function Projects() {

	const [data, setData] = useState<projectTypesProps[]>([
		{
			data: {
				assunto: 'Desenvolvimento de API',
				descricao: 'Foi desenvolvido uma API (Application Program Interface) que facilitasse os processos dentro do clube então nós fizemos :)',
				url_github: 'https://github.com/ClubeProgramacaoSSA/Back-End-Site-Clube-de-Programacao'
			},

		},
		{
			data: {
				assunto: 'Desenvolvimento de API',
				descricao: 'Foi desenvolvido uma API (Application Program Interface) que facilitasse os processos dentro do clube então nós fizemos :)',
				url_github: 'https://github.com/ClubeProgramacaoSSA/Back-End-Site-Clube-de-Programacao',
			}
		}
	]);

	useEffect(() => {
		async function getData() {
			axios.get("http://localhost:8080/projects")
				.then(({ data }) => { setData(data); console.log(data); })
				.catch((err) => console.error(err));
		}
		getData();
	}, []);

	//   useEffect(() => {
	// 	console.log(data);

	//   }, [data]);

	if (data != null)
		return (
			<Layout navbar>
				<main className="w-full mx-auto my-20">
					<div className="text-white flex flex-col items-center">
						<h1 className="my-8 font-Roboto font-bold xsm:text-5xl sm:text-5xl text-7xl ">
							<span className="text-orange">P</span>ROJETOS
						</h1>
						<p className="text-center max-w-4xl font-Manrope mx-6 font-base text-xl sm:text-lg xsm:text-lg">
							O clube de progamação do SENAI/CIMATEC além de realizar torneios e
							aulas, também desenvolve projetos com os integrantes. Indo de
							websites, até programas funcionais para resolver determinados
							problemas. A maior parte dos projetos de código são disponibilizada no
							<a
								className="text-orange font-bold"
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/ClubeProgramacaoSSA"
							>
								{" "}
								GitHub,{" "}
							</a>{" "}
							e podem ser acessados pelos links abaixo. Outras documentações ou
							vídeos podem ser acessadas pelo{" "}
							<a
								className="text-orange font-bold"
								target="_blank"
								rel="noopener noreferrer"
								href=""
							>
								{" "}
								Google Drive{" "}
							</a>{" "}
							do clube. Aqui estarão registrados os principais projetos que a equipe
							do Clube já realizou.
						</p>

						{
							data.length ? data.map((projeto) => (
								<Projbox data={projeto.data} />
							)) : (<div className="text-center"><p className="text-lg">Nenhum projeto</p></div>)
						}

					</div>
				</main>
			</Layout>
		);
}
