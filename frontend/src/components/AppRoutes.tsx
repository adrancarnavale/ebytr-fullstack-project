import { Routes, Route } from 'react-router-dom';
import { CreateTask, EditTask, Login, Registration, Tasks } from '@pages';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/edit/:taskId" element={<EditTask />} />
    </Routes>
  );
}
