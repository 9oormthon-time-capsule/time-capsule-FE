import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import Directory from './pages/timecapsule/Directory';
import LetterWritePage from './pages/timecapsule/LetterWritePage';
import ReflectWritePage from './pages/timecapsule/ReflectWritePage';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/directory/:type/:userId', element: <Directory /> },
]);

export default router;
