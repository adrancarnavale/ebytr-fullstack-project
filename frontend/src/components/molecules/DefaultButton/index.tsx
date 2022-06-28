import { Button } from '../../atoms/Button';
import { IButton } from '../../types';

export function DefaultButton({ content, onClick }: IButton) {
  return (
    <Button
      onClick={onClick}
      content={content}
      className="bg-nord-dark-4 h-[5vh] m-auto w-full rounded-md mb-[1.5vh] text-nord-light-1 hover:bg-nord-dark-3 border-2 shadow-sm border-nord-dark-1 hover:border-nord-dark-5 hover:shadow-lg"
    />
  );
}