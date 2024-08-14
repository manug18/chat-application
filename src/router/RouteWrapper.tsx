// import { AuthenticatedRoute } from './ProtectedRoutes';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PAGE_ROUTES } from './Routes';
import { Home } from '../pages/Home';
import { Layout } from '../components/Layout';

export function RoutesWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={PAGE_ROUTES.home} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
