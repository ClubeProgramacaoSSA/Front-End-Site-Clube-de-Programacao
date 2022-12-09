import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home/pages";
import { Projects } from './features/projects/pages'
import { Login } from "./features/system/pages/login";
import { WorkShops } from './features/workshop/pages'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/workshops" element={<WorkShops />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}