import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';
import { Tasks } from '../pages/Tasks';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}
