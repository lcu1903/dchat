import Header from '../components/header/Header';
import ProfileBody from '../components/ProfileBody';

import SidebarProfile from '../components/Sidebar/SidebarProfile';
import { FriendListProvider } from '../contexts/FriendlistContext';

import styles from '../styles';

function Profile() {
    return (
        <div className="font-fontDisplay flex text-lg h-screen overflow-hidden ">
            <SidebarProfile />
            <div className={`bg-content ${styles.contentWidth} `}>
                <FriendListProvider>
                    <Header />
                    <ProfileBody />
                </FriendListProvider>
            </div>
        </div>
    );
}
export default Profile;
