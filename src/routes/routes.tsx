// import { createBrowserRouter } from 'react-router-dom';
// import RootSiteLayout from '../pages/site/components/Layout/RootSiteLayout';
// import RootAdminLayout from '../pages/admin/components/Layout/RootAdminLayout';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store/store';
// import Home from '../pages/site/Home';
// import Dashboard from '../pages/admin/Dashboard';
// import Categories from '../pages/admin/Categories';
// import Products from '../pages/admin/Products';
// import Register from '../pages/site/Auth/Register';
// import Login from '../pages/site/Auth/Login';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootSiteLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       }
//     ]
//   },
//   {
//     path: '/register',
//     element: <Register />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/admin',
//     element: <RootAdminLayout />,
//     children: [
//       {
//         path: 'dashboard',
//         element: <Dashboard />
//       },
//       {
//         path: 'categories',
//         element: <Categories />
//       },
//       {
//         path: 'products',
//         element: <Products />
//       }
//     ]
//   }
// ]);

// export default router;
