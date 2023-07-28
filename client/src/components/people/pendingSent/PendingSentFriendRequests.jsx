import SentFriendRequests from './SentFriendRequests';
import PendingRequests from './PendingRequests';
function PendingSentFriendRequests() {
    return (
        <div className=" max-h-[100vh] w-[75vw] max-w-[50vw] ">
            <div className={'friend-list h-full max-h-[50vh] pb-2 pt-2'}>
                
                <PendingRequests />
            </div>
            <div className={'friend-list h-full max-h-[50vh] pb-2 pt-2'}>
                
                <SentFriendRequests></SentFriendRequests>
            </div>
        </div>
    );
}

export default PendingSentFriendRequests;
