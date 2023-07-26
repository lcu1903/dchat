import SentFriendRequests from './SentFriendRequests';
import PendingRequests from './PendingRequests';
function PendingSentFriendRequests() {
    return (
        <div className="max-h-[75vh] w-[75vw] ">
            <div className={'friend-list h-40'}>
                PENDING
                <PendingRequests />
            </div>
            <div className={'friend-list'}>
                SENT
                <SentFriendRequests />
            </div>
        </div>
    );
}

export default PendingSentFriendRequests;
