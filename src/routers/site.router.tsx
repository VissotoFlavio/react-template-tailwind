import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Error404NotFoundPage } from '../pages/errors/notfound';
import { Site } from '../pages/site/Site';
import { HomePage } from '../pages/site/home/home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Site />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <Error404NotFoundPage />,
      },
    ],
  },
]);

export const SiteRouter = () => {
  return <RouterProvider router={router} />;
};
