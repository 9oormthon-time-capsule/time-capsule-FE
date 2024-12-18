import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import CategoryRegisterPage from './pages/todo/category/CategoryRegisterPage';
import CategoryPage from './pages/todo/category/CategoryPage';

const router = createBrowserRouter([
    { path: '/', element: <MainPage /> },
    { path: '/todo/category', element: <CategoryPage /> },
    { path: '/todo/category/new', element: <CategoryRegisterPage /> },
]);

export default router;
