import { createBrowserRouter } from 'react-router-dom';
import Profile from '../pages/Profile';
import Hero from '../pages/Hero';
import routes from '.';
const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Hero></Hero>,
    },
    {
        path: routes.channel,
        element: <Profile></Profile>,
    },
    {
        path: routes.serverChannel,
        element: <Profile></Profile>,
    },
]);

export default router;
