//todo: fazer o componente do Projbox
//todo: criar o caminho para puxar os projetos do banco de dados

export function Projects() {
	return (
		<main>
			<div className="text-white max-w-4xl mx-auto my-20 flex flex-col items-center">
				<h1 className="my-8 font-Roboto font-bold md:text-6xl text-5xl ">
					<span className="text-orange">P</span>ROJETOS
				</h1>
				<p className="text-center font-Manrope mx-6 text-lg">
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
			</div>
		</main>
	);
}
