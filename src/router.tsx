import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LetterWritePage from './pages/timecapsule/LetterWritePage';
import ReflectWritePage from './pages/timecapsule/ReflectWritePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/write/letter',
		element: <LetterWritePage />,
	},
	{
		path: '/write/reflect',
		element: <ReflectWritePage />,
	},
]);

export default router;
