import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn, signUp, logOut, getUserProfile } from 'api/auth';
import { fetchContacts } from 'api/getContacts';
import { addContacts } from 'api/getContacts';
import { deleteContacts } from 'api/getContacts';

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () => {
  return fetchContacts();
});

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  payload => {
    return addContacts(payload);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  (contactsId, { rejectWithValue }) => {
    try {
      return deleteContacts(contactsId);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  'auth/getUser',
  async (_, {rejectWithValue}) => {
    try {
      const data = await getUserProfile();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


export const logInThunk = createAsyncThunk(
  'auth/login',
  async (body, {rejectWithValue}) => {
    try {
      const data = await logIn(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const SignUpThunk = createAsyncThunk(
  'auth/register',
  async (body, {rejectWithValue}) => {
    try {
      const data = await signUp(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (body, {rejectWithValue}) => {
    try {
      const data = await logOut(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);