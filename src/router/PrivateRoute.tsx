import { Outlet, Navigate } from 'react-router-dom';

type props = {
  isLogin: boolean;
};

const PrivateRoutes = ({ isLogin }: props) => (isLogin ? <Outlet /> : <Navigate to="/login" />);

export default PrivateRoutes;
