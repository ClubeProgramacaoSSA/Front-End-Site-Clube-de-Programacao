//todo: criar o caminho para puxar os projetos do banco de dados
//todo: componentizar de forma padronizada a de jap
//todo: background mais dinamico
import React from "react";
import { Projbox } from "../projects/components/projbox";
import imagem from "./Quadro.png";
import { useState } from "react";

const apiTeste = {
	imgUrl:
		"https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
	title: "Titulo",
	text: "Texto texto texto",
	linkGit: "https://github.com/ClubeProgramacaoSSA/",
	linkDrive: "https://github.com/ClubeProgramacaoSSA/",
};

export function Projects() {
	return (
		<main className="max-w-4xl mx-auto my-20">
			<div className="text-white flex flex-col items-center">
				<h1 className="my-8 font-Roboto font-bold xsm:text-5xl sm:text-5xl text-7xl ">
					<span className="text-orange">P</span>ROJETOS
				</h1>
				<p className="text-center font-Manrope mx-6 font-base text-xl sm:text-lg xsm:text-lg">
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
				<Projbox data={apiTeste} />
				<Projbox data={apiTeste} />
				<Projbox data={apiTeste} />
			</div>
		</main>
	);
}
