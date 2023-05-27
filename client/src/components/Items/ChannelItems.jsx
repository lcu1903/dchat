import { selectChannelId, selectServerId, setChannelInfo } from '../../features/channelSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles';
import { Trash2 } from 'react-feather';
import { db } from '../../firebase';
import Button from '../Button';
function ChannelItems({ name, id, icon }) {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const serverId = useSelector(selectServerId);
    const channelId = useSelector(selectChannelId);

    const setChanel = () => {
        dispatch(
            setChannelInfo({
                channelId: id,
                channelName: name,
            }),
        );
    };
    const handleChannelClicked = () => {
        setChanel();
        navigate(`/channel/${serverId}/${id}`);
    };
    return (
        <div className="Channels mb-[1px] h-9 ">
            <div className={`${styles.channelDefault} `} onClick={handleChannelClicked}>
                <div className="pr-1">{icon}</div>
                <div>{name}</div>
                <Button
                    className="hover:text-textHovered hover:bg-trashBg ml-auto cursor-pointer rounded-sm p-1 opacity-20 hover:opacity-100"
                    disabled={!channelId}
                    onClick={() =>
                        db.collection('serverItems').doc(serverId).collection('channels').doc(channelId).delete()
                    }
                >
                    <Trash2 className=" h-5" />
                </Button>
            </div>
        </div>
    );
}

export default ChannelItems;
