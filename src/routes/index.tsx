import React, {useContext} from 'react';
import {AuthContext} from '../contexts';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const {signed} = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
