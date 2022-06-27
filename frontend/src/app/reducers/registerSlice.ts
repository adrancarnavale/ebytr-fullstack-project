import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { CustomError } from '../../utils/CustomError';
import {
  ErrorData,
  LoginInfos,
  RegisterState,
  LoginReturnInfos,
  UserInfos,
} from './types';

const initialState: RegisterState = {
  token: '',
  id: '',
  isFetching: false,
  isRegistered: false,
  isLogged: false,
  error: {
    message: '',
    status: 0,
  },
};

export const createUser = createAsyncThunk<
  LoginReturnInfos,
  UserInfos,
  { rejectValue: ErrorData }
>('user/createUser', async (userInfos, thunkApi) => {
  try {
    const { data: response } = await api.post<LoginReturnInfos>(
      '/user/register',
      {
        ...userInfos,
      }
    );

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
  LoginReturnInfos,
  LoginInfos,
  { rejectValue: ErrorData }
>('user/logInUser', async (loginInfos, thunkApi) => {
  try {
    const { data: response } = await api.post<LoginReturnInfos>('/user/login', {
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
      state.isLogged = true;
      state.error.message = '';
      state.error.status = 0;
      state.token = action.payload.token;
      state.id = action.payload.id;
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      localStorage.setItem('id', JSON.stringify(action.payload.id));
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
