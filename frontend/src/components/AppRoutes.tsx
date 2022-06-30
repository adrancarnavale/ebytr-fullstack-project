import { Routes, Route } from 'react-router-dom';
import { CreateTask } from '../pages/CreateTask';
import { EditTask } from '../pages/EditTask';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { Tasks } from '../pages/Task';

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
