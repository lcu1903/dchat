import routes from './index.js';

import { SignUp, LogIn, Profile, Channels, Hero } from '../pages/index.js';
import IndividualChat from '../components/chat/IndividualChat.jsx';

const router = [
    {
        path: routes.home,
        element: Hero,
    },
    {
        path: routes.serverChannel,
        element: Profile,
    },
    {
        path: routes.channel,
        element: Channels,
    },
    {
        path: routes.textChannel,
        element: Channels,
    },
    {
        path: routes.logIn,
        element: LogIn,
    },
    {
        path: routes.signUp,
        element: SignUp,
    },
    {
        path:routes.privateChat,
        element:IndividualChat,
    },
];

export default router;
