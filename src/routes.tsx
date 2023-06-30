import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/projects" element={<Projects />} />
      <Route path="/workshops" element={<WorkShops />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutUS" element={<Login />} /> */}
    </Routes>
  );
}
