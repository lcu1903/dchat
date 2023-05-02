import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Inbox from '../components/Inbox';
import Content from '../components/Content';
import styles from '../styles';

function Profile() {
    return (
        <div className="font-fontDisplay flex text-lg">
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
