import styles from '../styles';
function Inbox() {
    const data = [1, 2, 3, 4];
    return <div className={` h-screen ${styles.inboxWidth} bg-neutral-900`}>{data}</div>;
}

export default Inbox;
