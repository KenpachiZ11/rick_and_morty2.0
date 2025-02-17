import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { ProviderContext } from './context/context'
import { Provider } from 'react-redux';

import router from './routers/Routers';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ProviderContext>
      <RouterProvider router={router} />
    </ProviderContext>
  </Provider>
);