import moment from 'moment';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { Trash2 } from 'react-feather';
import { selectChannelId, selectServerId } from '../features/channelSlice';
import { useSelector } from 'react-redux';
import Button from './Button';
function Message({ id, message, timestamp, name, photoURL, email }) {
    const [user] = useAuthState(auth);
    var channelId = useSelector(selectChannelId);
    const serverId = useSelector(selectServerId);

    return (
        <div className="hover:bg-hovered my-5 mr-2 flex items-center p-1 pl-5 ">
            <img src={photoURL} alt="" className="mr-3 h-10 cursor-pointer rounded-full hover:shadow-2xl"></img>
            <div className="flex flex-col">
                <h4 className="flex items-center space-x-2 font-medium">
                    <span className="text-textHovered cursor-pointer text-sm hover:underline">{name}</span>
                    <span className="text-blurMessage text-xs italic">
                        {moment(timestamp?.toDate().getTime()).format('lll')}
                    </span>
                </h4>
                <p className="text-text text-sm">{message}</p>
            </div>
            {user?.email === email && (
                <Button
                    className="hover:text-textHovered hover:bg-trashBg ml-auto cursor-pointer rounded-sm p-1 opacity-20 hover:opacity-100"
                    onClick={() => {
                        db.collection('serverItems')
                            .doc(serverId)
                            .collection('channels')
                            .doc(channelId)
                            .collection('message')
                            .doc(id)
                            .delete();
                    }}
                >
                    <Trash2 className=" h-5" />
                </Button>
            )}
        </div>
    );
}

export default Message;
