/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable indent */
import { GithubLogo, GoogleLogo } from "phosphor-react";

export interface projectTypesProps {
	data: {
		assunto: string
		descricao: string
		dt_imagem?: Date
		dt_inicio?: Date
		dt_termino?: Date
		dt_termino_previsto?: Date
		imagem?: string
		nome_imagem?: string
		nome_lider?: string
		nome_projeto?: string
		url_github: string
		tipo?: string
	};
}

export function Projbox({

	data: { assunto, descricao, dt_imagem, dt_inicio, dt_termino, dt_termino_previsto, imagem, nome_imagem,
		nome_lider, nome_projeto, url_github, tipo },

}: projectTypesProps) {

	return (
		<main className="mt-16 md:ml-4 md:mr-4 hover:scale-105 duration-300 rounded-xl	">
			<div className="flex sm:flex-col flex-row text-white border-orange">
				<div className="xsm:self-center sm:self-center self-auto">
					<img
						className="max-h-96 rounded-tl-lg rounded-bl-xl sm:rounded-xl xsm:rounded-xl md:rounded-xl border-orange border-b-2"
						src={"https://picsum.photos/200/300"}
						alt="Imagem"
					/>
				</div>
				<div className="flex flex-col ml-4 mr-4 mt-5">
					<strong className="font-Roboto text-5xl sm:self-center xsm:self-center self-start text-start mx-auto bg-clip-text hover:text-transparent hover:bg-gradient-to-l from-pink-500 to-orange">
						{assunto}
					</strong>
					<strong className="font-Manrope text-xl sm:text-lg xsm:text-lg font-normal text-gray-400 xsm:self-center sm:self-center self-start max-w-md sm:text-center xsm:text-center text-start mt-3 md:ml-5 lg:ml-5 xl:ml-5">
						{descricao}
					</strong>
					<div className="flex flex-row ml-5 lg:mr-5 xl:mr-5 sm:ml-0 xsm:ml-0 mt-5 gap-10 font-Roboto font-medium sm:gap-2 xsm:gap-2 self-center">
						<a
							className="px-10 py-2 sm:px-4 xsm:px-4 sm:py-1 xsm:py-1 gap-3 flex items-center border-solid border-2 rounded-lg border-orange hover:scale-110 hover:bg-orange duration-300"
							href={url_github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<GithubLogo size={32} />
							GitHub
						</a>
						<a
							className="px-10 py-2 sm:px-4 xsm:px-4 sm:py-1 xsm:py-1 gap-3 flex items-center border-solid border-2 rounded-lg 
                  			border-purple hover:scale-110 hover:bg-purple duration-300"
							href={url_github}
							target="_blank"
							rel="noopener noreferrer"
						>
							<GoogleLogo size={32} />
							Google Drive
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
