import { DiscordIcon } from '../../img';

function ServerItem({ bgHover = 'itemsTheme', name = '', onClick, image }) {
    if (name.length > 4) {
        name = name.slice(0, 1);
    }
    return (
        <>
            <button onClick={onClick} className={`icon-box hover:bg-${bgHover}  hover:rounded-2xl`}>
                {!name ? <DiscordIcon /> : name}
            </button>
        </>
    );
}

export default ServerItem;
