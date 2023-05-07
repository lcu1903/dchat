
import Profile from '../pages/Profile';
import routes from '.';
import Channels from '../pages/Channels';

const router= ([
    {
        path: routes.serverChannel,
        element: Profile,
    },
    {
        path: routes.channel,
        element: Channels,
    },
]);

export default router;
