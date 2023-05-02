import Divider from './Divider';
import { DiscordIcon } from '../img';
import styles from '../styles';
import ServerItem from './ServerItem';
function Inbox() {
    return (
        <div
            className={` flex h-screen w-[72px] flex-col ${styles.inboxWidth} bg-inboxCol items-center justify-start pt-3`}
        >
            <button className=" icon-box hover:bg-itemsTheme hover:rounded-2xl ">
                <DiscordIcon />
            </button>
            <div className="mb-2 rounded-sm">
                <Divider width={'[32px]'} height={'[2px]'} />
            </div>

            <ServerItem name="123"></ServerItem>
        </div>
    );
}

export default Inbox;
