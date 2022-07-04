import { RadioGroup } from '@headlessui/react';
import { Controller } from 'react-hook-form';
import { Container } from '@atoms';
import { IRadioGroupProps } from './types';

export function RadioGroupElement({ formHook }: IRadioGroupProps) {
  return (
    <Container className="mb-[2vh]">
      <Controller
        name="status"
        control={formHook?.control}
        render={({ field }) => (
          <RadioGroup className="self-start w-full" {...field}>
            <RadioGroup.Label className="text-nord-light-1 text-xl w-full">
              Status:
            </RadioGroup.Label>
            <Container className="flex flex-row gap-2 w-full justify-around">
              <RadioGroup.Option value="pending">
                {({ checked }) => (
                  <Container
                    className={
                      checked
                        ? 'bg-nord-aurora-4 p-2 rounded-md shadow-lg text-nord-dark-1 mt-1'
                        : 'bg-nord-dark-4 p-2 rounded-md shadow-sm text-nord-light-1 mt-1'
                    }
                  >
                    Pending
                  </Container>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="done">
                {({ checked }) => (
                  <Container
                    className={
                      checked
                        ? 'bg-nord-aurora-4 p-2 rounded-md shadow-lg text-nord-dark-1 mt-1'
                        : 'bg-nord-dark-4 p-2 rounded-md shadow-sm text-nord-light-1 mt-1'
                    }
                  >
                    Done
                  </Container>
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="in progress">
                {({ checked }) => (
                  <Container
                    className={
                      checked
                        ? 'bg-nord-aurora-4 p-2 rounded-md shadow-lg text-nord-dark-1 mt-1'
                        : 'bg-nord-dark-4 p-2 rounded-md shadow-sm text-nord-light-1 mt-1'
                    }
                  >
                    In Progress
                  </Container>
                )}
              </RadioGroup.Option>
            </Container>
          </RadioGroup>
        )}
      />
    </Container>
  );
}
