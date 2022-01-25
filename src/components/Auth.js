import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCurrentUser } from '../redux/auth';

const Auth = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = useSelector(loadCurrentUser);

  if (!isAuthenticated) {
    return <Navigate to="/users/login" state={{ from: location }} />;
  }

  return children;
};

export const AuthRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = useSelector(loadCurrentUser);

  if (isAuthenticated) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate to={from} />;
  }

  return children;
};

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

AuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Auth;
