import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import styles from '../styles';


function Profile() {
    return (
        <div className="font-fontDisplay flex text-lg h-screen">
            <Sidebar />
            <div className={`bg-content ${styles.contentWidth}`}><Header/></div>
        </div>
    );
}
export default Profile;
