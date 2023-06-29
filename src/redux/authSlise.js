import { createSlice } from '@reduxjs/toolkit';
import { logInThunk, logOutThunk, SignUpThunk, getCurrentUserThunk } from './thunks';

const initialState = {
  user: {},
  token: '',
  isLoading: false,
  error: '',
};
const handleLogInFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.user = payload.user;
};

const handleSetUserCurrent = (state, { payload }) => {
  state.isLoading = false;
  state.user = payload;
};

const handleLogOutFulfilled = state => {
  state.isLoading = false;
  state.token = '';
  state.user = {};
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(logInThunk.fulfilled, handleLogInFulfilled)
      .addCase(SignUpThunk.fulfilled, handleLogInFulfilled)
      .addCase(logOutThunk.fulfilled, handleLogOutFulfilled)
      .addCase(getCurrentUserThunk.fulfilled, handleSetUserCurrent)
      .addMatcher(action => {
        return action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        return action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
