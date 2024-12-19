import { createBrowserRouter } from 'react-router-dom';

import Login from './pages/login/Login';
import MainPage from './pages/main/MainPage';
import Directory from './pages/timecapsule/Directory';
import LetterWritePage from './pages/timecapsule/LetterWritePage';
import ReflectWritePage from './pages/timecapsule/ReflectWritePage';
import LetterDetail from './pages/timecapsule/LetterDetail';
import ReflectDetail from './pages/timecapsule/ReflectDetail';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/main', element: <MainPage /> },
  { path: '/directory/:type/:userId', element: <Directory /> },
  { path: '/write/letter', element: <LetterWritePage /> },
  { path: '/write/reflect', element: <ReflectWritePage /> },
  { path: '/detail/letter/:letterId', element: <LetterDetail /> },
  { path: '/detail/reflect/:letterId', element: <ReflectDetail /> },
]);

export default router;
