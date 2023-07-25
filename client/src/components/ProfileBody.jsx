import { useContext } from 'react';

import { FriendListContext } from '../contexts/FriendlistContext';
import { AllFriends, PendingFriendRequests, StrangersList } from './people';

function ProfileBody() {
    var ComponentToRender;
    const friendListComponent = useContext(FriendListContext);

    var id = friendListComponent.friendListComponent;

    switch (id) {
        case 1:
            ComponentToRender = AllFriends;
            break;
        case 2:
            ComponentToRender = PendingFriendRequests;
            break;
        case 3:
            ComponentToRender = StrangersList;
            break;
        default:
            ComponentToRender = AllFriends;
            break;
    }
    return (
        <div className="flex">
            <ComponentToRender></ComponentToRender>
            
        </div>
    );
}

export default ProfileBody;
