import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Registration } from '../pages/Registration';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
}
