import { Routes, Route } from 'react-router';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Layout } from '../Layout';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

const Home = lazy(() => import('../../pages/Home'));
const Register = lazy(() => import('../../pages/Register'));
const Login = lazy(() => import('../../pages/Login'));
const ContactsBook = lazy(() => import('../../pages/ContactsBook'));
const Error = lazy(() => import('../../pages/Error'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsBook />}
                />
              }
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </>
  );
};
