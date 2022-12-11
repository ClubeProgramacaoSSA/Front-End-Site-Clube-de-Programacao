import { ContentProps } from "../pages/index";
import { VideoCamera, FilePdf } from "phosphor-react";

interface WorkshopProps {
	workShop: ContentProps;
}

export function Workshop({ workShop: workshop }: WorkshopProps) {
	return (
		<>
			<h2 className="font-bold text-2xl mt-10 text-center mb-5">
				{workshop.assunto}
			</h2>
			<div className="text-2xl font-semibold flex flex-col items-center gap-2">
				<img
					className="w-13"
					src={"https://picsum.photos/200/300"}
					alt="Avatar do responsavel"
				/>
				<div className="flex flex-col items-center">
					<span>{workshop.nome_projeto}</span>
					<span className="text-sm">{workshop.nome_imagem}</span>
				</div>
			</div>
			<p className="font-medium text-justify mt-10 text-xl mb-5">
				{workshop.descricao}
			</p>
			<div className="flex flex-col gap-5 items-center mb-10 font-bold text-xl">
				<a
					className="px-6 py-2 flex gap-3 items-center border-solid border-2 rounded-lg 
                  border-orange hover:scale-125 hover:bg-orange duration-300"
					href=""
				>
					<FilePdf size={32} />
					PDF
				</a>
				<a
					className="px-6 py-2 flex gap-3 items-center border-solid border-2 rounded-lg 
                  border-purple hover:scale-125 hover:bg-purple duration-300"
					href=""
				>
					<VideoCamera className="uppercase" size={32} />
					Vídeo
				</a>
			</div>
		</>
	);
}
