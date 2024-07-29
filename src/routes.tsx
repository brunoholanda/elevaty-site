import { useEffect, lazy, Suspense, useState } from 'react';
import { Route, Routes, useLocation, HashRouter, Navigate } from 'react-router-dom';
import FloatingButton from './components/FloatingButton';
import Loading from './components/Loading';
import Posts from './pages/Manager';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/404'));
const PageBody = lazy(() => import('./components/PageBody'));
const Authentication = lazy(() => import('./pages/Auth'));
const EditPost = lazy(() => import('./pages/Manager/EditPost'));
const PostPage = lazy(() => import('./pages/PostPage'));

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<PageBody />}>
            <Route index element={<Home />} />
            <Route
              path="/operador"
              element={
                isAuthenticated ? (
                  <Posts />
                ) : (
                  <Navigate to="/login" replace state={{ from: '/operador' }} />
                )
              }
            />
            <Route
              path="/login"
              element={<Authentication setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/edit/:postId"
              element={
                isAuthenticated ? (
                  <EditPost />
                ) : (
                  <Navigate to="/login" replace state={{ from: '/edit' }} />
                )
              }
            />
            <Route
              path="/post/:postId"
              element={<PostPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <FloatingButton />
    </HashRouter>
  );
}

export default AppRoutes;
