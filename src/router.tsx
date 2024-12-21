import { createBrowserRouter } from 'react-router-dom';

import Login from './pages/login/Login';
import MainPage from './pages/main/MainPage';
import Directory from './pages/timecapsule/Directory';
import LetterWritePage from './pages/timecapsule/LetterWritePage';
import ReflectWritePage from './pages/timecapsule/ReflectWritePage';
import LetterDetail from './pages/timecapsule/LetterDetail';
import ReflectDetail from './pages/timecapsule/ReflectDetail';
import TodoMainPage from './pages/todo/TodoMainPage';
import CategoryRegisterPage from './pages/todo/category/CategoryRegisterPage';
import CategoryPage from './pages/todo/category/CategoryPage';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/main', element: <MainPage /> },
  { path: '/directory/:type/:userId', element: <Directory /> },
  { path: '/write/letter', element: <LetterWritePage /> },
  { path: '/write/reflect', element: <ReflectWritePage /> },
  { path: '/detail/letter/:letterId', element: <LetterDetail /> },
  { path: '/detail/reflect/:letterId', element: <ReflectDetail /> },
  { path: '/todo', element: <TodoMainPage /> },
  { path: '/todo/category', element: <CategoryPage /> },
  { path: '/todo/category/new', element: <CategoryRegisterPage /> },
]);

export default router;
