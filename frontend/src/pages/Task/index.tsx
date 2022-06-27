import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTasksFromUser } from '../../app/reducers/TaskSlice';
import { TaskHeader } from '../../components/templates/TaskHeader';
import { TaskTable } from '../../components/templates/TaskTable';
import { getStorage } from '../../utils/storage/getStorage';

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
    <div>
      <TaskHeader />
      {tasks.length > 0 && <TaskTable tasks={tasks} />}
    </div>
  );
}
