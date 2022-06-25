import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { CustomError } from '../../utils/CustomError';
import {
  ErrorData,
  LoginInfos,
  registerState,
  TokenInfos,
  UserInfos,
} from './types';

const initialState: registerState = {
  token: '',
  isFetching: false,
  isRegistered: false,
  error: {
    message: '',
    status: 0,
  },
};

export const createUser = createAsyncThunk<
  TokenInfos,
  UserInfos,
  { rejectValue: ErrorData }
>('user/createUser', async (userInfos, thunkApi) => {
  try {
    const { data: response } = await api.post('/user/register', {
      ...userInfos,
    });

    return response;
  } catch (error) {
    const { status, message } = new CustomError(
      (error as CustomError).response
    );

    const errorData = {
      status,
      message,
    };

    return thunkApi.rejectWithValue(errorData);
  }
});

export const logInUser = createAsyncThunk<
  TokenInfos,
  LoginInfos,
  { rejectValue: ErrorData }
>('user/logInUser', async (loginInfos, thunkApi) => {
  try {
    const { data: response } = await api.post('/user/login', {
      ...loginInfos,
    });
    return response;
  } catch (error) {
    const { status, message } = new CustomError(
      (error as CustomError).response
    );

    const errorData = {
      status,
      message,
    };

    return thunkApi.rejectWithValue(errorData);
  }
});

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    resetRegistrationStatus: (state) => {
      state.isRegistered = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, _action) => {
      state.isFetching = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.token = action.payload.token;
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      state.isRegistered = true;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error.message = action.payload?.message as string;
      state.error.status = action.payload?.status as number;
    });

    builder.addCase(logInUser.pending, (state, _action) => {
      state.isFetching = true;
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.token = action.payload.token;
      localStorage.setItem('token', JSON.stringify(action.payload.token));
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error.message = action.payload?.message as string;
      state.error.status = action.payload?.status as number;
    });
  },
});

export const { resetRegistrationStatus } = registerSlice.actions;

export default registerSlice.reducer;
