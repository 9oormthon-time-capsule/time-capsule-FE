import { Navigate } from 'react-router-dom';

interface IRouteElement {
  element: JSX.Element;
}

const isLoggedIn = () => {
  return localStorage.getItem('user-info') !== null;
};

export const PrivateRoute = ({ element }: IRouteElement) => {
  return isLoggedIn() ? element : <Navigate to="/" />;
};

export const PublicRoute = ({ element }: IRouteElement) => {
  return isLoggedIn() ? <Navigate to="/main" /> : element;
};
