import SentFriendRequests from './SentFriendRequests';
import PendingRequests from './PendingRequests';
function PendingSentFriendRequests() {
    return (
        <div className="flex flex-col max-w-[50vw]  ">
            <div className={'ml-[30px] mr-5 mt-2 '}>
                
                <PendingRequests />
            </div>
            <div className={'ml-[30px] mr-5 mt-2 '}>
                
                <SentFriendRequests></SentFriendRequests>
            </div>
        </div>
    );
}

export default PendingSentFriendRequests;
