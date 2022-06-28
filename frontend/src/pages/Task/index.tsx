import { useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTasksFromUser } from '../../app/reducers/TaskSlice';
import { TaskHeader } from '../../components/organisms/TaskHeader';
import { getStorage } from '../../utils/storage/getStorage';
import { TaskContent } from '../../components/organisms/TaskContent';
import { PageContainer } from '../../components/molecules/PageContainer';

export function Tasks() {
  const dispatch = useAppDispatch();

  const userId = getStorage('id');

  useEffect(() => {
    dispatch(getTasksFromUser(userId));
  }, []);

  const {
    task: { tasks },
  } = useAppSelector((state) => state);

  return (
    <PageContainer>
      <TaskHeader />
      <TaskContent elements={tasks} />
    </PageContainer>
  );
}
