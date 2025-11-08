import React from 'react';
import { Routes, Route } from 'react-router-dom';

import * as component from '../../pages/index';
import { routeDataBeforeLogin } from './constant';

const Default = component.Login;

const RoutesBeforeLogin = () => {
  return (
    <Routes>
      {CreateRoute(routeDataBeforeLogin)}
    </Routes>
  );
};

const CreateRoute = (routeData) => {
  return (
    <>
      {routeData
        ? routeData.map((route) => {
            const { id, url, componentName } = route;
            return (
              <React.Fragment key={id}>
                <Route path={url} element={<DynamicComponent componentName={componentName} />} />
              </React.Fragment>
            );
          })
        : ''}
        <Route path="*" element={<Default />} />
    </>
  );
};

const DynamicComponent = ({ componentName }) => {
  const dynamicComp = component[componentName] || Default;
  return React.createElement(dynamicComp);
};

export default RoutesBeforeLogin;