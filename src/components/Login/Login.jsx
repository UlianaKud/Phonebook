import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/thunks';
import toast from 'react-hot-toast';
import scss from './login.module.scss';
import {
  Button,
  Input,
  FormControl,
  InputLabel,
  Card,
  Typography,
} from '@mui/material';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(logInThunk({ email, password })).unwrap();
      toast.success('Welcome');
      navigate('/contacts');
    } catch (error) {
      toast.error('Error Login');
    }
  };

  return (
    <Card className={scss.wrapper}>
      <Typography
        className={scss.header}
        align="center"
        component="div"
        variant="h2"
      >
        Log In
      </Typography>
      <form onSubmit={handleSubmit} className={scss.form}>
        <FormControl fullWidth>
          <InputLabel htmlFor="inputEmail">
            Email
          </InputLabel>
          <Input
            className={scss.email}
            name="email"
            type="email"
            id="inputEmail"
            onChange={handleChange}
            value={email}
            autoComplete
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="inputPassword">
            Password
          </InputLabel>
          <Input
          className={scss.password}
            name="password"
            type="password"
            id="inputPassword"
            onChange={handleChange}
            value={password}
            autoComplete
          />
        </FormControl>
        <div className={scss.buttons}>
            <Button
              type="submit"
              className={scss.login}
              disabled={!email || !password}
            >
              Log In
            </Button>
            <Button className={scss.singup}>
              <Link to="/register">Sign Up</Link>
            </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
