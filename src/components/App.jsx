import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Layout from './Layout/Layout';

const Home = lazy(() => import('./Home/Home'));
const Register = lazy(() => import('./Register/Register'));
const Login = lazy(() => import('./Login/Login'));

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        padding: '30px',
      }}
    >
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
