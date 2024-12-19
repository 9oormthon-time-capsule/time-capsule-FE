import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import Directory from './pages/timecapsule/Directory';
import LetterWritePage from './pages/timecapsule/LetterWritePage';
import ReflectWritePage from './pages/timecapsule/ReflectWritePage';
import Login from './pages/login/Login';

const router = createBrowserRouter([
  { path: '/auth', element: <Login /> },
  { path: '/', element: <MainPage /> },
  { path: '/directory/:type/:userId', element: <Directory /> },
  { path: '/write/letter', element: <LetterWritePage /> },
  { path: '/write/reflect', element: <ReflectWritePage /> },
]);

export default router;
