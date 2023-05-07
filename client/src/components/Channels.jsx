import SidebarChannel from './Sidebar/SidebarChannel';
import styles from '../styles';

function Channels() {
    return (
        <div className="font-fontDisplay flex text-lg">
            <SidebarChannel />
            <div className={`${styles.contentWidth} bg-content shadow`}>
                <div className={`${styles.headerDefault}`}>Header</div>
                <div>Content</div>
            </div>
        </div>
    );
}

export default Channels;
