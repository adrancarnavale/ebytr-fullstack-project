import { useForm } from 'react-hook-form';
import { IFormContainer, IUserInfos } from './types';
import { useAppDispatch } from '../../../app/hooks';
import { createUser } from '../../../app/reducers/tokenSlice';

export function FormContainer({ children }: IFormContainer) {
  const dispatch = useAppDispatch();

  const { handleSubmit } = useForm();

  const onSubmit = (data: IUserInfos) => dispatch(createUser(data));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex m-auto mt-[4vh] flex-col justify-center items-center bg-nord-dark-2 p-[4vh] rounded-md w-[90vw] max-w-lg max-h-screen"
    >
      {children}
    </form>
  );
}
