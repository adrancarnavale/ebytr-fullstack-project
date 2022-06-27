import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { getTasksFromUser } from '../../app/reducers/TaskSlice';
import { TaskHeader } from '../../components/templates/TaskHeader';
import { getStorage } from '../../utils/storage/getStorage';

export function Tasks() {
  const dispatch = useAppDispatch();
  const userId = getStorage('id');
  useEffect(() => {
    dispatch(getTasksFromUser(userId));
  }, []);

  return (
    <div>
      <TaskHeader />
    </div>
  );
}
