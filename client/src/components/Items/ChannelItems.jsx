import { selectServerId, setChannelInfo } from '../../features/channelSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles';

function ChannelItems({ name, id, icon }) {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const serverId = useSelector(selectServerId);

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
                <div className='pr-1'>{icon}</div>
                <div>{name}</div>
            </div>
        </div>
    );
}

export default ChannelItems;
