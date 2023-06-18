import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ForgetPassword from '../pages/ForgetPassword';
import Register from '../pages/Register';
import PrivateRoutes from './PrivateRoute';
import MainLayout from '../layout/MainLayout';
import { useSelector } from 'react-redux';
import NewPassword from '../pages/NewPassword';
import MainPage from '../layout/MainLayout/MainPage';
import List from '../components/List';
import BoardView from '../layout/MainLayout/TaskViews/BoardView/Boardview';

import ProfileInfo from '../components/ProfileInfo';
import ProfileMainPanel from '../components/ProfileMainPanel';

import Calendar from '../components/calendar';

import ThemeSetting from '../layout/Setting/ThemeSetting';
import ProfilePage from '../layout/MainLayout/ProfilePage';


const MainRouter = () => {
  const user = useSelector((state: any) => state.user.user);
  let isLogin: boolean = user.accessToken ? true : false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!isLogin ? <Login /> : <Navigate to="/" />} />
        <Route path="/forget" element={!isLogin ? <ForgetPassword /> : <Navigate to="/" />} />
        <Route path="/register" element={!isLogin ? <Register /> : <Navigate to="/" />} />
        <Route path="/new-password" element={!isLogin ? <NewPassword /> : <Navigate to="/" />} />
        <Route element={<PrivateRoutes isLogin={isLogin} />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="project/:projectID/*" element={<MainPage />}>
              <Route path="list-view" element={<List />} />
              <Route path="board-view" element={<BoardView />} />
              <Route path="calendar-view" element={<Calendar />} />
            </Route>
          </Route>
          <Route path='/profile' element={<ProfilePage />}>
            <Route path="info" element={<ProfileInfo />} />
            <Route path="panel" element={<ProfileMainPanel />} />
            <Route path="setting" element={<ThemeSetting />} />
          </Route>
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
