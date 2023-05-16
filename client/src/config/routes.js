
import Profile from '../pages/Profile';
import routes from '.';
import Channels from '../components/Channels';


const router= ([
    {
        path: routes.serverChannel,
        element: Profile,
    },
    {
        path: routes.channel,
        element: Channels,
    },
    {
        path:routes.textChannel,
        element:Channels,
    }
]);

export default router;
