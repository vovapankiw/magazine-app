import { Navigate, Route, Routes } from 'react-router-dom';

import { Magazines } from './Magazines';
import { Magazine } from './Magazine';

export const MagazinesRoutes = () => (
  <Routes>
    <Route path="" element={<Magazines />} />
    <Route path=":magazineId" element={<Magazine />} />
    <Route path="*" element={<Navigate to="." />} />
  </Routes>
);
