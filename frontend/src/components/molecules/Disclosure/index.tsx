import { Disclosure } from '@headlessui/react';
import { useCallback } from 'react';
import { ArrowsOutSimple } from 'phosphor-react';
import { IDisclosureProps, TStatus } from '../../types';
import { Paragraph } from '../../atoms/Paragraph';
import { Container } from '../../atoms/Container';

const done = 'text-nord-aurora-4';
const progress = 'text-nord-aurora-3';
const pending = 'text-nord-aurora-1';
const def = 'text-nord-dark-1';

const style = 'w-[4vh] h-[4vw] p-1 w-full h-full';

export function DisclosureElement({
  title,
  content,
  status,
  created,
}: IDisclosureProps) {
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
      console.log(createdAt);

      const [year, month, day] = createdAt.split('T')[0].split('-');
      return [day, month, year].join('/');
    },
    [created]
  );

  return (
    <Disclosure>
      <Disclosure.Button className="my-[1vh] p-[1.5vh] bg-nord-dark-3 rounded-md text-nord-light-1 shadow-sm w-[80vw] max-w-[90%] border border-nord-dark-2 hover:bg-nord-dark-4 hover:border-nord-dark-2 hover:shadow-lg focus:ring-2 focus:ring-nord-aurora-4 focus:outline-none">
        <Container className="flex flex-row justify-between items-center max-h-[5vh]">
          <Container>
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
        {content}
      </Disclosure.Panel>
    </Disclosure>
  );
}
