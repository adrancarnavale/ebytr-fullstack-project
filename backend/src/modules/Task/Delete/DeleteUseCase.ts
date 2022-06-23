import { DeleteRepository } from './DeleteRepository';

export class DeleteUseCase {
  constructor(private implementation: DeleteRepository) {}

  async execute(taskId: string): Promise<void> {
    await this.implementation.delete(taskId);

    return;
  }
}
