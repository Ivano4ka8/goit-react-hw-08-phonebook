import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const shouldRedirect = !selectIsLoggedIn && !selectIsRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
