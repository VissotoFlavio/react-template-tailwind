import './Site.css';

import { Outlet } from 'react-router-dom';

export const Site = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
