export type TStatus = 'done' | 'pending' | 'in progress';

export interface ITask {
  id?: string;
  authorId?: string;
  title: string;
  description: string | null;
  status: TStatus;
  createdAt: string;
}

export interface ITaskContentProps {
  elements: ITask[];
}
