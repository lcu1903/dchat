import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Inbox from '../components/Inbox';
import Content from '../components/Content';
import styles from '../styles';

function Profile() {
    return (
        <div className="flex">
            <Inbox />
            <Sidebar />
            <div className={`${styles.contentWidth} bg-content`}>
                <Header />
                <Content />
            </div>
        </div>
    );
}
export default Profile;
