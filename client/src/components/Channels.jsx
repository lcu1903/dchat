import SidebarChannel from './Sidebar/SidebarChannel';
import styles from '../styles';
import { useSelector } from 'react-redux';
import { selectChannelName } from '../features/channelSlice';
import { HashtagIcon } from '../img';
import Chat from './Chat';

function Channels() {
    const channelName = useSelector(selectChannelName);
    return (
        <div className="font-fontDisplay flex h-screen text-lg max-h-screen">
            <div>
                <SidebarChannel />
            </div>

            <div className={`${styles.contentWidth} bg-content shadow`}>
                <div className={`${styles.headerDefault} text-textHovered`}>
                    <div className="text-text pr-2 ">
                        <HashtagIcon />
                    </div>
                    <div>{channelName}</div>
                </div>
                <div className="mb-4 flex flex-col space-y-2 px-2">
                    <Chat />
                </div>
            </div>
        </div>
    );
}

export default Channels;
