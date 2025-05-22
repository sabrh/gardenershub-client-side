import { Navigate, useLocation } from 'react-router';
import useAuth from '../context/useAuth';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p className="text-center">Loading...</p>;

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivateRoute;
