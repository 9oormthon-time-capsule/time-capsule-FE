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

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/main', element: <MainPage /> },
  { path: '/directory/:type', element: <Directory /> },
  { path: '/write/letter', element: <LetterWritePage /> },
  { path: '/write/reflect', element: <ReflectWritePage /> },
  { path: '/detail/letter/:letterId', element: <LetterDetail /> },
  { path: '/detail/reflect/:letterId', element: <ReflectDetail /> },
  { path: '/todo', element: <TodoMainPage /> },
  { path: '/todo/category', element: <CategoryPage /> },
  { path: '/todo/category/new', element: <CategoryRegisterPage /> },
]);

export default router;
