import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { CustomError } from '../../utils/CustomError';
import { ErrorData, registerState, UserInfos } from './types';

const initialState: registerState = {
  token: '',
  isFetching: false,
  error: {
    message: '',
    status: 0,
  },
};

export const createUser = createAsyncThunk<
  string,
  UserInfos,
  { rejectValue: ErrorData }
>('user/createUser', async (userInfos, thunkApi) => {
  try {
    const { data: response } = await api.post('/user/register', {
      ...userInfos,
    });

    return response;
  } catch (e) {
    const errorInstance = new CustomError((e as CustomError).response);

    const error = {
      status: errorInstance.status,
      message: errorInstance.message,
    };

    return thunkApi.rejectWithValue(error);
  }
});

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, _action) => {
      state.isFetching = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.token = action.payload;
      localStorage.setItem('token', JSON.stringify(action.payload));
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error.message = action.payload?.message as string;
      state.error.status = action.payload?.status as number;
    });
  },
});

// export const {} = registerSlice.actions;

export default registerSlice.reducer;
