import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SignUpThunk } from 'redux/thunks';
import toast from 'react-hot-toast';
import {
  Button,
  Input,
  FormControl,
  InputLabel,
  Card,
  Typography,
} from '@mui/material';
import scss from './register.module.scss';

const Register = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else {
      setName(value);
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await dispatch(SignUpThunk({ name, email, password })).unwrap();
      toast.success('Sign Up successfully!!');
      navigate('/contacts');
    } catch (error) {
      toast.error('Error Sign up');
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
        Sign up
      </Typography>
      <form onSubmit={handleSubmit} className={scss.form}>
        <FormControl fullWidth>
          <InputLabel htmlFor="inputUserName">Name</InputLabel>
          <Input
            className={scss.name}
            name="name"
            type="text"
            id="inputUserName"
            onChange={handleChange}
            value={name}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="inputEmail">Email</InputLabel>
          <Input
            className={scss.email}
            name="email"
            type="email"
            id="inputEmail"
            onChange={handleChange}
            value={email}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="inputPassword">Password</InputLabel>
          <Input
            className={scss.password}
            name="password"
            type="password"
            id="inputPassword"
            onChange={handleChange}
            value={password}
          />
        </FormControl>
        <div className={scss.buttons}>
          <Button
            type="submit"
            className={scss.signup}
            disabled={!email || !password || !name}
          >
            Sign Up
          </Button>
          <Button className={scss.login}>
            <Link to="/login">Log In</Link>
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Register;
