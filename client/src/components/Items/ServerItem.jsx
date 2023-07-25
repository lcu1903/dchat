import { useDispatch } from 'react-redux';
import { DiscordIcon } from '../../img';
import { setChannelInfo, setServerInfo } from '../../features/channelSlice';
import { useNavigate } from 'react-router-dom';

function ServerItem({ bgHover = 'itemsTheme', name = '', onClick, image, id }) {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const setServer = () => {
        dispatch(
            setServerInfo({
                serverId: id,
                serverName: name,
            }),
        );
        navigate(`/channel/${id}`);
    };
    const resetChannelInfo = () => {
        dispatch(
            setChannelInfo({
                channelId: '',
                channelName: '',
            }),
        );
    };
    const handleServerClicked = () => {
        setServer();
        resetChannelInfo();
    };

    if (name.length > 4) {
        name = name.slice(0, 1);
    }
    return (
        <>
            <button onClick={handleServerClicked} className={`icon-box hover:bg-${bgHover}  `}>
                {!name ? <DiscordIcon /> : name}
            </button>
        </>
    );
}

export default ServerItem;
