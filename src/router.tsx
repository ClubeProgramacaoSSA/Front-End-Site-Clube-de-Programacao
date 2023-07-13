import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import { Projects } from './features/projects/pages';
// import { WorkShops } from './features/workshop/pages';
// import { Login } from './features/system/pages/login';
import { createBrowserRouter } from 'react-router-dom';
import Projects from './pages/projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
]);

export default router;
