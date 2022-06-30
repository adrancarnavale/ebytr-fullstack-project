import { RadioGroup } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { Container } from '../../atoms/Container';
import { ContentContainer } from '../../molecules/ContentContainer';
import { useAppDispatch } from '../../../app/hooks';
import { getTasksFromUser, updateOrder } from '../../../app/reducers/taskSlice';
import { getStorage } from '../../../utils/storage/getStorage';

export function TaskOptions() {
  const [option, setOption] = useState('createdAt');

  const dispatch = useAppDispatch();

  const userId = getStorage('id');

  useEffect(() => {
    dispatch(updateOrder(option));

    const getTasksInfos = {
      order: option,
      userId,
    };

    dispatch(getTasksFromUser(getTasksInfos));
  }, [option]);

  return (
    <ContentContainer>
      <RadioGroup className="flex flex-col" value={option} onChange={setOption}>
        <Container className="mb-2 flex flex-col justify-center items-center">
          <RadioGroup.Label className="text-lg mt-0 mx-auto text-nord-light-1">
            Sort your tasks by:{' '}
          </RadioGroup.Label>
        </Container>

        <Container className="flex flex-row gap-2">
          <RadioGroup.Option value="createdAt">
            {({ checked }) => (
              <Container
                className={
                  checked
                    ? 'border border-nord-aurora-4 p-2 rounded-md bg-nord-dark-3 text-nord-light-1'
                    : 'border border-nord-dark-3 p-2 rounded-md bg-nord-dark-3 text-nord-light-1'
                }
              >
                Date of Creation
              </Container>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="title">
            {({ checked }) => (
              <Container
                className={
                  checked
                    ? 'border border-nord-aurora-4 p-2 rounded-md bg-nord-dark-3 text-nord-light-1'
                    : 'border border-nord-dark-3 p-2 rounded-md bg-nord-dark-3 text-nord-light-1'
                }
              >
                Title
              </Container>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="status">
            {({ checked }) => (
              <Container
                className={
                  checked
                    ? 'border border-nord-aurora-4 p-2 rounded-md bg-nord-dark-3 text-nord-light-1'
                    : 'border border-nord-dark-3 p-2 rounded-md bg-nord-dark-3 text-nord-light-1'
                }
              >
                Status
              </Container>
            )}
          </RadioGroup.Option>
        </Container>
      </RadioGroup>
    </ContentContainer>
  );
}
