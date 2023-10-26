import { AppBar } from './AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Loader } from './Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
