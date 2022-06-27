import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { CustomError } from '../../utils/CustomError';
import { ErrorData, Task, TaskState } from './types';

const initialState: TaskState = {
  tasks: [],
  order: 'createdAt',
  isFetching: false,
  error: {
    message: '',
    status: 0,
  },
};

export const getTasksFromUser = createAsyncThunk<
  Task[],
  string,
  { rejectValue: ErrorData }
>('task/getFromUser', async (userId, thunkApi) => {
  try {
    const config = {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token') as string),
      },
    };

    const { data: response } = await api.get(
      `/task/getAll/${userId}?order=${initialState.order}`,
      config
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

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTasksFromUser.pending, (state, _action) => {
      state.isFetching = true;
    });
    builder.addCase(getTasksFromUser.fulfilled, (state, action) => {
      console.log(action);

      state.isFetching = false;
      state.tasks = [...action.payload];
    });
    builder.addCase(getTasksFromUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error.message = action.payload?.message as string;
      state.error.status = action.payload?.status as number;
    });
  },
});

// export const {} = taskSlice.actions;

export default taskSlice.reducer;
