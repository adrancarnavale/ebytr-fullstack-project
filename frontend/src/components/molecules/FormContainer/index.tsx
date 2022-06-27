import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../app/hooks';
import { createUser, logInUser } from '../../../app/reducers/registerSlice';
import { IFormContainer, IUserInfos } from '../../types';

export function FormContainer({ children, eventTrigger }: IFormContainer) {
  const dispatch = useAppDispatch();
  const formHook = useForm<IUserInfos>();

  const onSubmit: SubmitHandler<IUserInfos> = (data: IUserInfos) => {
    if (eventTrigger === 'register') {
      dispatch(createUser(data));
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
