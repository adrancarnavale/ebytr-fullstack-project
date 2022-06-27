import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { getTasksFromUser } from '../../app/reducers/TaskSlice';

export function Tasks() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getTasksFromUser(JSON.parse(localStorage.getItem('id') as string))
    );
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
    </div>
  );
}
