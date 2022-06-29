import { SubmitButton } from '../../atoms/SubmitButton';
import { IButtonProps } from '../../types';

export function FormButton({ content, onClick }: IButtonProps) {
  return (
    <SubmitButton
      onClick={onClick}
      content={content}
      className="bg-nord-dark-4 h-[5vh] m-auto w-[40%] rounded-md mb-[1vh] text-nord-light-1 hover:bg-nord-dark-3 shadow-sm hover:shadow-lg focus:ring-2 focus:ring-nord-aurora-4 focus:outline-none mt-4"
    />
  );
}
