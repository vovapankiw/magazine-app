import { Navigate, Route, Routes } from 'react-router-dom';
import { Preferences } from './Preferences';

export const PreferencesRoutes = () => (
  <Routes>
    <Route path="" element={<Preferences />} />
    <Route path="*" element={<Navigate to="." />} />
  </Routes>
);
