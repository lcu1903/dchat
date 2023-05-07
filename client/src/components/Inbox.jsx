
import { DiscordIcon } from '../img';
import styles from '../styles';

import ServerItem from './ServerItem';
import { useNavigate } from 'react-router-dom';
import routes from '../config';

import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

function Inbox() {
    const navigate = useNavigate();
    const [serverItems] = useCollection(db.collection('serverItems'));

    const handleServerClicked = () => { 
        navigate(routes.channel,{replace:true} )
    };
    const handleProfileClicked = () => {
        navigate(routes.serverChannel)
    }
    return (
        <div
            className={` flex h-screen w-[72px] flex-col ${styles.inboxWidth} bg-inboxCol items-center justify-start pt-3`}
        >
            <button className=" icon-box hover:bg-itemsTheme hover:rounded-2xl " onClick={handleProfileClicked}>
                <DiscordIcon />
            </button>
            <div className="divider mb-2 h-[2px] w-10"></div>
            <div className="mb-4 flex flex-col space-y-2 px-2">
                {serverItems?.docs.map((doc) => (
                    <ServerItem key={doc.id} id={doc.id} name={doc.data().serverName} onClick={handleServerClicked}></ServerItem>
                ))}
            </div>
        </div>
    );
}

export default Inbox;
