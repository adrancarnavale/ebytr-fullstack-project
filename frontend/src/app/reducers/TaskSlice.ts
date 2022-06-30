import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { CustomError } from '../../utils/CustomError';
import { getStorage } from '../../utils/storage/getStorage';
import { ErrorData, IGetTasksFromUserParams, Task, TaskState } from './types';

const initialState: TaskState = {
  tasks: [],
  order: 'createdAt',
  taskBeingEditted: '',
  isCreated: false,
  isFetching: false,
  areTasksLoaded: false,
  error: {
    message: '',
    status: 0,
  },
};

export const getTasksFromUser = createAsyncThunk<
  Task[],
  IGetTasksFromUserParams,
  { rejectValue: ErrorData }
>('task/getFromUser', async (getTasksInfos, thunkApi) => {
  try {
    console.log(getTasksInfos.order);

    const config = {
      headers: {
        authorization: getStorage('token'),
      },
    };

    const { data: response } = await api.get(
      `/task/getAll/${getTasksInfos.userId}?order=${getTasksInfos.order}`,
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

export const addNewTask = createAsyncThunk<
  Task,
  Task,
  { rejectValue: ErrorData }
>('task/addNewTask', async (taskInfos, thunkApi) => {
  try {
    const config = {
      headers: {
        authorization: getStorage('token'),
      },
    };

    const { data: response } = await api.post(
      '/task/create',
      taskInfos,
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

export const destroyTask = createAsyncThunk<
  string,
  string,
  { rejectValue: ErrorData }
>('/task/destroy', async (taskId, thunkApi) => {
  try {
    const config = {
      headers: {
        authorization: getStorage('token'),
      },
    };

    await api.delete(`/task/destroy/${taskId}`, config);

    return taskId as string;
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

export const updateTask = createAsyncThunk<
  Task,
  Task,
  { rejectValue: ErrorData }
>('task/update', async (taskInfos, thunkApi) => {
  try {
    const config = {
      headers: {
        authorization: getStorage('token'),
      },
    };

    const { data: response } = await api.patch('/task/edit', taskInfos, config);

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
  reducers: {
    saveTaskBeingEditted: (state, action) => {
      state.taskBeingEditted = action.payload;
    },
    updateOrder: (state, action) => {
      state.order = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasksFromUser.pending, (state, _action) => {
      state.isFetching = true;
    });
    builder.addCase(getTasksFromUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.tasks = [...action.payload];
      state.areTasksLoaded = true;
    });
    builder.addCase(getTasksFromUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error.message = action.payload?.message as string;
      state.error.status = action.payload?.status as number;
    });

    builder.addCase(addNewTask.pending, (state, _action) => {
      state.areTasksLoaded = false;
      state.isFetching = true;
    });
    builder.addCase(addNewTask.fulfilled, (state, action) => {
      state.isFetching = false;
      state.tasks = [...state.tasks, action.payload];
      state.isCreated = true;
    });
    builder.addCase(addNewTask.rejected, (state, action) => {
      state.isFetching = false;

      state.error.message = action.payload?.message as string;
      state.error.status = action.payload?.status as number;
    });

    builder.addCase(destroyTask.pending, (state, _action) => {
      state.isFetching = true;
    });
    builder.addCase(destroyTask.fulfilled, (state, action) => {
      state.isFetching = false;
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    });
    builder.addCase(destroyTask.rejected, (state, action) => {
      state.isFetching = false;
      state.error.message = action.payload?.message as string;
      state.error.status = action.payload?.status as number;
    });

    builder.addCase(updateTask.pending, (state, _action) => {
      state.isFetching = true;
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.isFetching = false;
      const target = state.tasks.find(
        (task) => task.id === action.payload.id
      ) as Task;
      Object.assign(target, action.payload);
    });
    builder.addCase(updateTask.rejected, (state, action) => {
      state.isFetching = false;
      state.error.message = action.payload?.message as string;
      state.error.status = action.payload?.status as number;
    });
  },
});

export const { saveTaskBeingEditted, updateOrder } = taskSlice.actions;

export default taskSlice.reducer;
