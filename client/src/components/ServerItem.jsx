import { DiscordIcon } from '../img';

function ServerItem({ bgHover = 'itemsTheme', name = '1234' }) {
    return (
        <>
            <button
                className={`icon-box hover:bg-${bgHover} hover:rounded-2xl

            `}
            >
                {!name ? <DiscordIcon /> : name}
            </button>
        </>
    );
}

export default ServerItem;
