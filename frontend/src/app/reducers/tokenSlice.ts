import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { StatusCodes } from 'http-status-codes';
import axios from 'axios';

interface TokenState {
  token: string;
  isFetching: boolean;
  error: {
    message: string;
    status: number;
  };
}

interface UserInfos {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface Token {
  token: string;
}

interface ErrorData {
  message: string;
  status: number;
}

const initialState: TokenState = {
  token: '',
  isFetching: false,
  error: {
    message: '',
    status: 200,
  },
};

export const createUser = createAsyncThunk<
  Token,
  UserInfos,
  { rejectValue: ErrorData }
>('token/createUser', async (userInfos: UserInfos, thunkApi) => {
  const { data: response } = await axios.post('/user/register', {
    body: {
      ...userInfos,
    },
  });

  if (response.status !== StatusCodes.CREATED)
    return thunkApi.rejectWithValue(response as ErrorData);

  return response.token as Token;
});

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, _action) => {
      state.isFetching = true;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.error.message = action.payload?.message as string;
      state.error.status = action.payload?.status as number;
    });
  },
});

export const { saveToken } = tokenSlice.actions;

export default tokenSlice.reducer;
