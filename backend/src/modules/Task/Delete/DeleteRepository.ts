export interface DeleteRepository {
  delete(taskId: string): Promise<void>;
}
