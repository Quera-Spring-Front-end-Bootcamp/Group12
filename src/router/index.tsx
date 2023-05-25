import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ForgetPassword from '../pages/ForgetPassword';
import Register from '../pages/Register';
import PrivateRoutes from './PrivateRoute';

const MainRouter = () => {
  const isLogin = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!isLogin ? <Login /> : <Navigate to="/" />} />
        <Route path="/forget" element={!isLogin ? <ForgetPassword /> : <Navigate to="/" />} />
        <Route path="/register" element={!isLogin ? <Register /> : <Navigate to="/" />} />
        <Route element={<PrivateRoutes isLogin={isLogin} />}>
          <Route
            path="/"
            element={
              <>
                <p>Home</p>
              </>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <>
              <p>404 Not found</p>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
