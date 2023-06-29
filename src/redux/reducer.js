import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './authSlise';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: persistedReducer,
});
