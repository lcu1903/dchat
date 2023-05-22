import { DiscordIcon, PlusIcon } from '../img';
import styles from '../styles';

import ServerItem from './Items/ServerItem';
import { useNavigate } from 'react-router-dom';
import routes from '../config';

import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

function Inbox() {
    const navigate = useNavigate();
    const [serverItems] = useCollection(db.collection('serverItems'));

    const handleProfileClicked = () => {
        navigate(routes.serverChannel);
    };

    const handleAddServer = () => {
        const serverName = prompt('Enter new Server Name');
        if (serverName) {
            db.collection('serverItems').add({
                serverName: serverName,
                serverImage: null,
            });
        }
    };

    return (
        <div className={` flex h-screen w-[72px] flex-col ${styles.inboxWidth} bg-inboxCol items-center pt-3`}>
            <button className=" icon-box hover:bg-itemsTheme " onClick={handleProfileClicked}>
                <DiscordIcon />
            </button>
            <div className="divider mb-2 h-[2px] w-10"></div>
            <div className="mb-4 flex flex-col space-y-2 px-2">
                {serverItems?.docs.map((doc) => (
                    <ServerItem key={doc.id} id={doc.id} name={doc.data().serverName}></ServerItem>
                ))}
            </div>
            <button className={'icon-box text-green hover:bg-green hover:text-textHovered'} onClick={handleAddServer}>
                <PlusIcon />{' '}
            </button>
        </div>
    );
}

export default Inbox;
