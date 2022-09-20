import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { WorkShops } from "./pages/workshops";
import { Login } from "./pages/login";
export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/workshops" element={<WorkShops />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
