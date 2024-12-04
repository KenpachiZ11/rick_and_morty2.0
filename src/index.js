import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { ProviderContext } from './context/context'

import router from './routers/Routers';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ProviderContext>
    <RouterProvider router={router} />
  </ProviderContext>
);