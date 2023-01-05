import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ isLogged, children }) => {
  return isLogged ? children : <Navigate to="/" />;
};
