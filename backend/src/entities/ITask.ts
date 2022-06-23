export interface ITask {
  id?: string;
  authorId?: string;
  title: string;
  description: string | null;
  status: string;
}
