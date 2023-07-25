import { selectChannelId, selectServerId, setChannelInfo } from '../../features/channelSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles';
import { Trash2 } from 'react-feather';
import { auth, db } from '../../firebase';
import Button from '../Button';
import { useAuthState } from 'react-firebase-hooks/auth';
function ChannelItems({ name, id, icon, creatorId }) {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const serverId = useSelector(selectServerId);
    const channelId = useSelector(selectChannelId);

    const setChannel = () => {
        dispatch(
            setChannelInfo({
                channelId: id,
                channelName: name,
            }),
        );
    };
    const resetChanelInfo = () => {
        dispatch(
            setChannelInfo({
                channelId: '',
                channelName: '',
            }),
        );
    };
    const handleChannelClicked = () => {
        setChannel();
        navigate(`/channel/${serverId}/${id}`);
    };
    return (
        <div className="Channels mb-[1px] flex h-9 ">
            <div className={`${styles.channelDefault} `}>
                <div className="flex w-full items-center" onClick={handleChannelClicked}>
                    <div className="pr-1">{icon}</div>
                    <div>{name}</div>
                </div>
                {user?.uid === creatorId && (
                    <div>
                        <Button
                            className="hover:text-textHovered hover:bg-trashBg ml-auto cursor-pointer rounded-sm p-1 opacity-20 hover:opacity-100"
                            disabled={!channelId}
                            onClick={() => {
                                db.collection('serverItems')
                                    .doc(serverId)
                                    .collection('channels')
                                    .doc(channelId)
                                    .delete();
                                resetChanelInfo();
                            }}
                        >
                            <Trash2 className=" h-5" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChannelItems;
