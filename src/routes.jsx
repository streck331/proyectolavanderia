import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Contacto from './Contacto';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
]);

export default router;