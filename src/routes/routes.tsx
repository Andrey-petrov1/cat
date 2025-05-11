import { Routes, Route } from 'react-router-dom';
 import FavoritesPage from '../page/favorites-page';
import { MainPage } from '../page/main';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites-page" element={<FavoritesPage />} />
    </Routes>
  );
}
