import { selectServerId, selectServerName } from '../../reducer/channelSlice';
import styles from '../../styles';
import { useSelector } from 'react-redux';

import { useCollection } from 'react-firebase-hooks/firestore';

import { auth, db } from '../../firebase';
import ChannelItems from './../Items/ChannelItems';
import { HashtagIcon, PlusIcon } from '../../img';

import User from '../Items/User';
import { useAuthState } from 'react-firebase-hooks/auth';
function SidebarChannel() {
    const serverName = useSelector(selectServerName);
    const serverId = useSelector(selectServerId);
    const [channelItems] = useCollection(db.collection(`serverItems`).doc(`${serverId}`).collection('channels'));
    const [user] = useAuthState(auth);

    var creatorId = user?.uid;

    const handleAddChannel = () => {
        const channelName = prompt('Enter new Channel Name');
        if (channelName) {
            db.collection(`serverItems`).doc(`${serverId}`).collection('channels').add({
                channelName: channelName,
                creatorId: creatorId,
            });
        }
    };

    return (
        <div className={`${styles.sidebarDefault}`}>
            <div className={`${styles.sidebarHeaderDefault} text-textHovered flex`}>
                {serverName ? serverName : 'NoName'}
                <div className="flex w-full justify-end" onClick={handleAddChannel}>
                    {<PlusIcon></PlusIcon>}
                </div>{' '}
            </div>
            <div className={`${styles.sidebarContentDefault} `}>
                <div className="h-1 w-full"></div>
                {channelItems?.docs.map((doc) => (
                    <ChannelItems
                        creatorId={doc.data().creatorId}
                        key={doc.id}
                        id={doc.id}
                        name={doc.data().channelName.slice(0, 10)}
                        icon={<HashtagIcon />}
                    ></ChannelItems>
                ))}
            </div>
            <div>
                <User />
            </div>
        </div>
    );
}

export default SidebarChannel;
