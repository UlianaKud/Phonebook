import { Navigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut, setToken } from 'api/auth';
import { getCurrentUserThunk } from 'redux/thunks';

const Layout = () => {
  const { isAuth } = useSelector(state => ({
    isAuth: state.auth.token,
  }));
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (isAuth) {
      setToken(isAuth);
      dispatch(getCurrentUserThunk())
        .unwrap()
        .catch(() => dispatch(logOut()));
    }
  }, [isAuth, dispatch]);

  return (
    <>
      <Suspense>
        <Outlet />
        {isAuth ? (
          <Navigate to={'/contacts'} />
        ) : (
          <Navigate
            to={
              location.pathname === '/'
                ? '/login'
                : ['/login', '/register'].includes(location.pathname)
                ? location.pathname
                : '/login'
            }
          />
        )}
      </Suspense>
    </>
  );
};

export default Layout;
