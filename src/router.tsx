import { createBrowserRouter } from 'react-router-dom';

import Login from './pages/login/Login';
import MainPage from './pages/timecapsule/MainPage';
import Directory from './pages/timecapsule/directory/Directory';
import LetterWritePage from './pages/timecapsule/write/LetterWritePage';
import ReflectWritePage from './pages/timecapsule/write/ReflectWritePage';
import LetterDetail from './pages/timecapsule/detail/LetterDetail';
import ReflectDetail from './pages/timecapsule/detail/ReflectDetail';
import TodoMainPage from './pages/todo/TodoMainPage';
import CategoryRegisterPage from './pages/todo/category/CategoryRegisterPage';
import CategoryPage from './pages/todo/category/CategoryPage';
import { PrivateRoute, PublicRoute } from './components/common/PrivateRoute';

const router = createBrowserRouter([
  { path: '/', element: <PublicRoute element={<Login />} /> },
  { path: '/main', element: <MainPage /> },
  {
    path: '/directory/letter',
    element: <PrivateRoute element={<Directory pageType="타임캡슐" />} />,
  },
  {
    path: '/directory/reflect',
    element: <PrivateRoute element={<Directory pageType="일일회고" />} />,
  },
  {
    path: '/write/letter',
    element: <PrivateRoute element={<LetterWritePage />} />,
  },
  {
    path: '/write/reflect',
    element: <PrivateRoute element={<ReflectWritePage />} />,
  },
  {
    path: '/detail/letter/:letterId',
    element: <PrivateRoute element={<LetterDetail />} />,
  },
  {
    path: '/detail/reflect/:letterId',
    element: <PrivateRoute element={<ReflectDetail />} />,
  },
  { path: '/todo', element: <PrivateRoute element={<TodoMainPage />} /> },
  {
    path: '/todo/category',
    element: <PrivateRoute element={<CategoryPage />} />,
  },
  {
    path: '/todo/category/new',
    element: <PrivateRoute element={<CategoryRegisterPage />} />,
  },
]);

export default router;
