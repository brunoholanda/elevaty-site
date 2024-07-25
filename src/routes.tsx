import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes, useLocation, HashRouter } from 'react-router-dom';
import FloatingButton from './components/FloatingButton';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/404'));
const PageBody = lazy(() => import('./components/PageBody'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<PageBody />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <FloatingButton />
    </HashRouter>
  );
}

export default AppRoutes;
