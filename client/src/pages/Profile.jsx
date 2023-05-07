import Header from '../components/Header';
import SidebarServer from '../components/Sidebar/SidebarServer';

import styles from '../styles';

function Profile() {
    return (
        <div className="font-fontDisplay flex h-screen text-lg">
            <SidebarServer />
            <div className={`bg-content ${styles.contentWidth}`}>
                <Header />
            </div>
        </div>
    );
}
export default Profile;
