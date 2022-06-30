import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTasksFromUser } from '../../app/reducers/TaskSlice';
import { TaskHeader } from '../../components/organisms/TaskHeader';
import { getStorage } from '../../utils/storage/getStorage';
import { TaskContent } from '../../components/organisms/TaskContent';
import { PageContainer } from '../../components/molecules/PageContainer';
import { DefaultButton } from '../../components/molecules/DefaultButton';
import { Container } from '../../components/atoms/Container';
import { TaskOptions } from '../../components/organisms/TaskOptions';

export function Tasks() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userId = getStorage('id');

  const {
    task: { tasks, areTasksLoaded, order },
  } = useAppSelector((state) => state);

  useEffect(() => {
    const getTasksInfos = {
      order,
      userId,
    };

    dispatch(getTasksFromUser(getTasksInfos));
  }, []);

  return (
    <PageContainer>
      {areTasksLoaded && (
        <>
          <TaskHeader />
          <Container className="w-[95%] max-w-lg flex flex-row justify-center gap-2">
            <DefaultButton
              onClick={() => navigate('/create')}
              content="Create new task"
            />
          </Container>
          <Container className="w-[95%] max-w-lg flex flex-row justify-center gap-2">
            <TaskOptions />
          </Container>
          <TaskContent elements={tasks} />
        </>
      )}
    </PageContainer>
  );
}
