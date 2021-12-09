import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

/* ***Layouts**** */
const FullLayout = lazy(() => import('../layouts/full-layout/FullLayout'));
const BlankLayout = lazy(() => import('../layouts/blank-layout/BlankLayout'));
/* ***End Layouts**** */

const Error = lazy(() => import('../views/authentication/Error'));

/* ****Pages***** */
const Dashboard = lazy(() => import('../views/dashboard/Dashboard'));
/* ****Routes***** */

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboards/starter" /> },
      { path: '/dashboards/starter', exact: true, element: <Dashboard /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
