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
            <div className={`${styles.contentWidth} bg-slate-400`}>
                <Header />
                <div>-----------------</div>
                <Content />
            </div>
        </div>
    );
}
export default Profile;
