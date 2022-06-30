import { Disclosure } from '@headlessui/react';
import { useCallback } from 'react';
import { ArrowsOutSimple } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { IDisclosureProps, TStatus } from './types';
import { Paragraph } from '../../atoms/Paragraph';
import { Container } from '../../atoms/Container';
import { destroyTask } from '../../../app/reducers/taskSlice';
import { Button } from '../../atoms/Button';
import { useAppDispatch } from '../../../app/hooks';

const done = 'text-nord-aurora-4';
const progress = 'text-nord-aurora-3';
const pending = 'text-nord-aurora-1';
const def = 'text-nord-dark-1';

const style =
  'w-10 h-10 md:w-[5vh] md:h-[5vw] lg:w-[5vh] lg:h-[5vw] p-1 w-full h-full';

export function DisclosureElement({
  taskId,
  title,
  content,
  status,
  created,
}: IDisclosureProps) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const getStyle = (taskStatus: TStatus) => {
    switch (taskStatus) {
      case 'done':
        return done;
      case 'in progress':
        return progress;
      case 'pending':
        return pending;
      default:
        return def;
    }
  };

  const memoizedGetStyle = useCallback<() => string>(() => {
    const styleColor = getStyle(status);
    return `${style} ${styleColor}`;
  }, [title, content, status]);

  const memoizedSerializeDate = useCallback(
    (createdAt: string) => {
      const [year, month, day] = createdAt.split('T')[0].split('-');
      return [day, month, year].join('/');
    },
    [created]
  );

  return (
    <Disclosure>
      <Disclosure.Button className="my-[1vh] p-[1.5vh] bg-nord-dark-3 rounded-md text-nord-light-1 shadow-sm w-[80vw] max-w-[90%] border border-nord-dark-2 hover:bg-nord-dark-4 hover:border-nord-dark-2 hover:shadow-lg focus:ring-2 focus:ring-nord-aurora-4 focus:outline-none">
        <Container className="flex flex-row justify-between items-center max-h-[5vh]">
          <Container className="flex flex-col items-start">
            {title}
            <Paragraph
              className="text-xs"
              content={memoizedSerializeDate(created)}
            />
          </Container>

          <Container className="flex flex-row items-center">
            <ArrowsOutSimple className={memoizedGetStyle()} />
          </Container>
        </Container>
      </Disclosure.Button>

      <Disclosure.Panel className="bg-nord-dark-3 p-2 rounded-md text-nord-light-1 w-[70vw] text-center max-w-[90%] focus:ring-2 focus:ring-nord-aurora-4 focus:outline-none">
        <Container className="w-full">
          <Container className="flex flex-row justify-between w-full mt-0">
            <Button
              name={taskId}
              content="edit"
              onClick={() => navigate(`/edit/${taskId}`)}
              className="bg-nord-dark-4 h-[4vh] m-auto w-[30%] rounded-md mb-[1vh] text-nord-light-1 hover:bg-nord-dark-3 shadow-sm hover:shadow-lg focus:ring-2 focus:ring-nord-aurora-4 focus:outline-none mt-1 ml-4"
            />
            <Button
              content="delete"
              onClick={() => dispatch(destroyTask(taskId))}
              className="bg-nord-dark-4 h-[4vh] m-auto w-[30%] rounded-md mb-[1vh] text-nord-light-1 hover:bg-nord-dark-3 shadow-sm hover:shadow-lg focus:ring-2 focus:ring-nord-aurora-4 focus:outline-none mt-1 mr-4"
            />
          </Container>
          {content}
        </Container>
      </Disclosure.Panel>
    </Disclosure>
  );
}
