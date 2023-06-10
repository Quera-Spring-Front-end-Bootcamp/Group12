import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ForgetPassword from '../pages/ForgetPassword';
import Register from '../pages/Register';
import PrivateRoutes from './PrivateRoute';
import MainLayout from '../layout/MainLayout';
import { useSelector } from 'react-redux';

const MainRouter = () => {
  
  const user = useSelector((state: any) => state.user.user)
  let isLogin: boolean = user.accessToken ? true : false;  
  
  console.log(user);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!isLogin ? <Login /> : <Navigate to="/" />} />
        <Route path="/forget" element={!isLogin ? <ForgetPassword /> : <Navigate to="/" />} />
        <Route path="/register" element={!isLogin ? <Register /> : <Navigate to="/" />} />
        <Route element={<PrivateRoutes isLogin={isLogin} />}>
          <Route path="/" element={<MainLayout />} />
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
