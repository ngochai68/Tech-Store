import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

import './assets/sass/_base.scss';
import './assets/sass/reset.css';
import './assets/sass/tailwind.css';
import './assets/sass/App.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
