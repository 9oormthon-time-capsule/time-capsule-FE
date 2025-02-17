import { Navigate } from 'react-router-dom';

const isLoggedIn = () => {
  return localStorage.getItem('user-info') !== null;
};

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  return isLoggedIn() ? element : <Navigate to="/" />;
};

export default PrivateRoute;
