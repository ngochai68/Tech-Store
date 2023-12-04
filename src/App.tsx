import { useEffect, useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootSiteLayout from './pages/site/components/Layout/RootSiteLayout';
import RootAdminLayout from './pages/admin/components/Layout/RootAdminLayout';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider, Navigate } from 'react-router-dom';
import { logout } from './pages/auth.slice';
import { setCredentials } from './pages/auth.slice';
import { jwtDecode } from 'jwt-decode';
import Home from './pages/site/Home';
import Dashboard from './pages/admin/Dashboard';
import Categories from './pages/admin/Categories';
import Products from './pages/admin/Products';
import Register from './pages/site/Auth/Register';
import Login from './pages/site/Auth/Login';
import { RootState } from './store/store';
import './assets/sass/_base.scss';
import './assets/sass/reset.css';
import './assets/sass/tailwind.css';
import './assets/sass/App.css';

function App() {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: { exp: number; userId: number; username: string } = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          // Nếu token hết hạn, đăng xuất người dùng
          dispatch(logout());
        } else {
          // Nếu token còn hợp lệ, cập nhật trạng thái đăng nhập
          dispatch(setCredentials({ token, userId: decodedToken.userId }));
        }
      } catch (error) {
        console.error('Lỗi khi giải mã token:', error);
        dispatch(logout());
      }
    }
    setIsReady(true);
  }, [dispatch]);

  if (!isReady) {
    return <div>Loading...</div>; // Hoặc component loading tùy chỉnh của bạn
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootSiteLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
    {
      path: '/register',
      element: isLoggedIn ? <Navigate to='/' /> : <Register />
    },
    {
      path: '/login',
      element: isLoggedIn ? <Navigate to='/' /> : <Login />
    },
    {
      path: '/admin',
      element: isLoggedIn ? <RootAdminLayout /> : <Navigate to='/login' />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'categories',
          element: <Categories />
        },
        {
          path: 'products',
          element: <Products />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
