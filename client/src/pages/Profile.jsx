import Header from '../components/header/Header';
import SidebarServer from '../components/Sidebar/SidebarServer';

import styles from '../styles';

function Profile() {
    return (
        <div className="font-fontDisplay flex  text-lg max-h-screen ">
            <SidebarServer />
            <div className={`bg-content ${styles.contentWidth} `}>
                <Header />
            </div>
        </div>
    );
}
export default Profile;
