import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Info } from '../pages/Info';
import { InfoId } from '../pages/InfoId';

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      // errorElement: <ErrorPage />,
      children: [
          {
              path: '/',
              element: <Home />
          },
          {
              path: '/about',
              element: <About />
          },
          {
              path: '/info',
              element: <Info />
          },
          {
              path: '/info/:id',
              element: <InfoId/>
          }
      ]
  },
]);

export default router;