// import { useState, useEffect } from "react";
import { api } from "../../utils/api-simulator";
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

	// const [workShops, setWorkShops] = useState<Content[]>([]);

	// useEffect(() => {
	//   fetch("url")
	//     .then((response) => response.json())
	//     .then((data) => setWorkShops(data));
	// }, []);

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
