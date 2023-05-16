import SidebarChannel from './Sidebar/SidebarChannel';
import styles from '../styles';
import { useSelector } from 'react-redux';
import { selectChannelName } from '../features/channelSlice';
import { HashtagIcon } from '../img';


function Channels() {
    const channelName = useSelector(selectChannelName);
    return (
        <div className="font-fontDisplay flex text-lg">
            <div>
                <SidebarChannel />
                
            </div>
            <div className={`${styles.contentWidth} bg-content shadow`}>
                <div className={`${styles.headerDefault} text-textHovered`}>
                    <div className='pr-2'><HashtagIcon/></div>
                    <div>{channelName}</div>
                </div>
                <div className="mb-4 flex flex-col space-y-2 px-2"></div>
            </div>
        </div>
    );
}

export default Channels;
