import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home"
import { Projects } from "./features/projects/pages";
import { WorkShops } from "./features/workshop/pages";
import { Login } from "./features/system/pages/login";
export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/workshops" element={<WorkShops />} />
			<Route path="/login" element={<Login />} />
			<Route path="/aboutUS" element={<Login />} />

		</Routes>
	);
}
