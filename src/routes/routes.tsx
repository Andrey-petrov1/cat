import { Routes, Route } from 'react-router-dom';
import App from '../App';
import FavoritesPage from '../page/favorites-page';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/favorites-page" element={<FavoritesPage  />} />
    </Routes>
  );
}
