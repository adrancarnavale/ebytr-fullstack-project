import { SubmitButton } from '../../atoms/SubmitButton';
import { IButton } from '../../types';

export function FormButton({ content, onClick }: IButton) {
  return (
    <SubmitButton
      onClick={onClick}
      content={content}
      className="bg-nord-dark-4 h-[5vh] m-auto w-[40%] rounded-md mb-[1.5vh] text-nord-light-1 hover:bg-nord-dark-3 border-2 shadow-sm border-nord-dark-1 hover:border-nord-dark-5 hover:shadow-lg"
    />
  );
}
