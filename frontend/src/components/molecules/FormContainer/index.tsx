import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { createUser, logInUser } from '../../../app/reducers/registerSlice';
import { addNewTask, updateTask } from '../../../app/reducers/TaskSlice';
import { IFormContainerProps, IFormInfos, ITask } from '../../types';

export function FormContainer({ children, eventTrigger }: IFormContainerProps) {
  const dispatch = useAppDispatch();
  const formHook = useForm<IFormInfos>();

  const {
    task: { taskBeingEditted: taskId },
  } = useAppSelector((state) => state);

  const onSubmit: SubmitHandler<IFormInfos> = (data) => {
    if (eventTrigger === 'register') {
      dispatch(createUser(data));
      return;
    }
    if (eventTrigger === 'createTask') {
      dispatch(addNewTask(data as ITask));
      return;
    }
    if (eventTrigger === 'editTask') {
      const taskData = {
        ...data,
        id: taskId,
      };
      dispatch(updateTask(taskData as ITask));
      return;
    }
    dispatch(logInUser(data));
  };

  // https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { formHook });
    }
    return child;
  });

  return (
    <form
      onSubmit={formHook.handleSubmit(onSubmit)}
      className="flex m-auto mt-[4vh] flex-col justify-center items-center bg-nord-dark-2 p-[4vh] rounded-md w-[90vw] max-w-lg max-h-screen"
    >
      {childrenWithProps}
    </form>
  );
}
