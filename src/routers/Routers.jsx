import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Heroes } from '../pages/Heroes';
import { HeroesID } from '../pages/HeroesID';

const routers = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/heroes', element: <Heroes /> },
    { path: '/heroes/:id', element: <HeroesID /> },
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: routers,
    }
]);

export default router;