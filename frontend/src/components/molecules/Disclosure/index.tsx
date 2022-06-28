import { Disclosure } from '@headlessui/react';
import { useCallback } from 'react';
import { ArrowsOutSimple } from 'phosphor-react';
import { IDisclosureProps, TStatus } from '../../types';
import { Paragraph } from '../../atoms/Paragraph';

const done = 'bg-nord-aurora-4';
const progress = 'bg-nord-aurora-3';
const pending = 'bg-nord-aurora-1';
const def = 'bg-nord-dark-3';

const style =
  'my-[1vh] p-[1vh] rounded-md text-nord-dark-1 hover:bg-nord-aurora-2 shadow-sm border-nord-aurora-1 w-[80vw]';

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

  return (
    <Disclosure>
      <Disclosure.Button className={memoizedGetStyle}>
        <div className="flex flex-row justify-between items-center">
          {title}
          <div className="flex flex-row items-center">
            <Paragraph className="text-sm" content={created.split('T')[0]} />
            <ArrowsOutSimple className="w-[5vh] h-[5vw] text-nord-dark-1" />
          </div>
        </div>
      </Disclosure.Button>

      <Disclosure.Panel className="bg-nord-dark-3 p-2 rounded-md text-nord-light-1 w-[70vw] text-center">
        {content}
      </Disclosure.Panel>
    </Disclosure>
  );
}
