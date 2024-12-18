import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import Directory from './pages/timecapsule/Directory';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/directory/:type/:userId', element: <Directory /> },
]);

export default router;
