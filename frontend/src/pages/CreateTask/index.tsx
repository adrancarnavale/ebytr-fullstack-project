import { DefaultButton } from '../../components/molecules/DefaultButton';
import { PageContainer } from '../../components/molecules/PageContainer';
import { CreateTaskForm } from '../../components/organisms/CreateTaskForm';
import { CreateTaskHeader } from '../../components/organisms/CreateTaskHeader';

export function CreateTask() {
  return (
    <PageContainer>
      <CreateTaskHeader />
      <CreateTaskForm />
    </PageContainer>
  );
}
