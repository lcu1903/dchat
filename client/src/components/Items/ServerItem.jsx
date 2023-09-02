import { useDispatch, useSelector } from 'react-redux';
import { DiscordIcon } from '../../img';

import { useNavigate } from 'react-router-dom';
import { selectServerId, setChannelInfo, setServerInfo } from '../../reducer/channelSlice';

function ServerItem({ bgHover = 'itemsTheme', name = '', onClick, image, id }) {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const serverId = useSelector(selectServerId);
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
        <div >
            <button
                onClick={handleServerClicked}
                className={
                    serverId === id ? `icon-box bg-itemsTheme  rounded-2xl  hover:bg-${bgHover}  ` : `icon-box hover:bg-${bgHover}`
                }
            >
                {!name ? <DiscordIcon /> : name}
            </button>
        </div>
    );
}

export default ServerItem;
