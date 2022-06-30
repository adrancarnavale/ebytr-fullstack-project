import { v4 as uuidv4 } from 'uuid';
import { Paragraph } from '../../atoms/Paragraph';
import { ContentContainer } from '../../molecules/ContentContainer';
import { DisclosureElement } from '../../molecules/Disclosure';
import { ITask, ITaskContentProps } from './types';

export function TaskContent({ elements }: ITaskContentProps) {
  return (
    <ContentContainer>
      <Paragraph
        content="Your tasks: "
        className="text-lg mt-0 mx-auto text-nord-light-1"
      />
      {elements.map((element: ITask) => (
        <DisclosureElement
          key={uuidv4()}
          status={element.status}
          title={element.title}
          created={element.createdAt}
          content={element.description as string}
          taskId={element.id as string}
        />
      ))}
    </ContentContainer>
  );
}
