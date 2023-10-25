import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  return selectIsLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
