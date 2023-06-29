import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};
export const signUp = async body => {
  const {data} = await instance.post('/users/signup', body);
  if ('token' in data) setToken(data.token);
  return data;
};

export const logIn = async body => {
  const { data } = await instance.post('/users/login', body);
  if ('token' in data) {
    setToken(data.token);
  }
  return data;
};

export const getUserProfile = async () => {
    const { data } = await instance.get('/users/current');
    return data;
  };

export const logOut = async body => {
    const { data } = await instance.post('/users/logout', body);
    if ('token' in data) setToken(data.token);
    return data;
  };
  