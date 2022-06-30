export interface IDisclosureProps {
  taskId: string;
  title: string;
  content: string;
  status: 'done' | 'pending' | 'in progress';
  created: string;
}

export type TStatus = 'done' | 'pending' | 'in progress';
