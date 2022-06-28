import { v4 as uuidv4 } from 'uuid';
import { ContentContainer } from '../../molecules/ContentContainer';
import { DisclosureElement } from '../../molecules/Disclosure';
import { ITask, ITaskContentProps } from '../../types';

export function TaskContent({ elements }: ITaskContentProps) {
  return (
    <ContentContainer>
      {elements.map((element: ITask) => (
        <DisclosureElement
          key={uuidv4()}
          status={element.status}
          title={element.title}
          created={element.createdAt}
          content={element.description as string}
        />
      ))}
    </ContentContainer>
  );
}
