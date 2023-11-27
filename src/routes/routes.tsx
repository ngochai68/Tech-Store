import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/site/components/Layout/RootLayout';
import Home from '../pages/site/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
]);

export default router;
