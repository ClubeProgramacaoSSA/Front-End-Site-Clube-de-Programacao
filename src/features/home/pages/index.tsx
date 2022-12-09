import { useState } from "react";
import { Layout } from "../../../components/Layout";

export function Home() {
	const [state, setState] = useState(0);
	return (
		<Layout
			navbar
		>
			<h1>Home</h1>
			<button
				onClick={() => setState((old) => ++old)}
			>{`State Count: ${state}`}</button>
		</Layout>
	);
}
