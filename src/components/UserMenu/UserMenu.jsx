import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/thunks';
import { Navigate } from 'react-router-dom';
import scss from './userMenu.module.scss';
import { AppBar, Box, Typography, Toolbar, Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();

  const {
    isAuth,
    user: { email },
  } = useSelector(state => {
    return {
      isAuth: state.auth.token,
      user: state.auth.user,
    };
  });

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  if (!isAuth) {
    return <Navigate to={'/login'} />;
  }

  return (
    <Box sx={{ flexGrow: 1 }} className={scss.wrapper}>
      <AppBar position="static">
        <Toolbar className={scss.toolbar}>
          {email ? (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {`Hi, ${email}!`}
            </Typography>
          ) : `Hi!`}
          <Button color="inherit" onClick={handleLogOut}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    // <div>
    //   <p>{email}</p>
    //   <button onClick={handleLogOut}>Logout</button>
    // </div>
  );
};

export default UserMenu;
