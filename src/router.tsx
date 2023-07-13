import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import { Projects } from './features/projects/pages';
// import { WorkShops } from './features/workshop/pages';
// import { Login } from './features/system/pages/login';
import { createBrowserRouter } from 'react-router-dom';
import Projects from './pages/projects';
import ErrorPage from './pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
]);

export default router;
