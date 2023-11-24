import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/sass/_base.scss';
import './assets/sass/reset.css';
import './assets/sass/tailwind.css';
import './assets/sass/App.css';
import RootLayout from './pages/site/components/Layout/RootLayout';
import Home from './pages/site/Home';

function App() {
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

  return <RouterProvider router={router} />;
}

export default App;
