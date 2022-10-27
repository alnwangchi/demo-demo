import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import routers from './routers';
import { ThemeProvider } from '@mui/material/styles';
import { AnimatePresence } from 'framer-motion';
import theme from './theme';
// import Header from './components/Header';

const AnimationRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {routers.map((router, idx) => {
          if (!router.nested) {
            return <Route key={idx} path={router.path} element={router.element} />;
          } else {
            return (
              <Route key={idx} path={router.path} element={router.element}>
                {router.nested.map((nestedRouter, idx) => (
                  <Route key={idx} path={nestedRouter.path} element={nestedRouter.element} />
                ))}
              </Route>
            );
          }
        })}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AnimationRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
