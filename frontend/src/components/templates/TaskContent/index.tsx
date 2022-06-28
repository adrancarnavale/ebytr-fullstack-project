import { v4 as uuidv4 } from 'uuid';
import { DisclosureElement } from '../../molecules/Disclosure';
import { ITask, ITaskContent } from '../../types';

export function TaskContent({ elements }: ITaskContent) {
  return (
    <div className="w-[90%] max-w-[600px] m-auto p-1 bg-nord-dark-2 flex flex-col justify-center items-center mt-[2vh] rounded-md">
      {elements.map((element: ITask) => (
        <DisclosureElement
          key={uuidv4()}
          status={element.status}
          title={element.title}
          created={element.createdAt}
          content={element.description as string}
        />
      ))}
    </div>
  );
}
