import { Paragraph } from '@atoms';
import { ContentContainer, DisclosureElement } from '@molecules';
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
          key={crypto.randomUUID()}
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
