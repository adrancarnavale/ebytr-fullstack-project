import { Label } from '../../atoms/Label';
import { Input } from '../../atoms/Input';

export function UserPasswordInput() {
  return (
    <Label
      className="text-nord-light-1 text-lg"
      inputId="emailInput"
      content="Enter your password: "
    >
      <Input
        inputId="emailInput"
        type="text"
        className="bg-nord-light-1 border-2 border-nord-dark-2 rounded-md shadow-sm w-[90%] text-nord-dark-1 pl-2"
      />
    </Label>
  );
}
