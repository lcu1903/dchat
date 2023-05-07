import { FriendIcon, NitroIcon } from '../img';
import styles from '../styles';
import Button from './Button';

function Sidebar() {
    return (
        <div className={`flex flex-wrap ${styles.directMessageWidth} bg-sidebar`}>
            {/* SearchBar */}

            <div className="flex h-12 w-60 items-center  px-[10px] shadow">
                <button
                    className={`bg-inboxCol text-text flex h-7 w-[220px] items-center rounded-[4px]  px-[6px] py-[1px] text-sm`}
                >
                    Find or start a conversation
                </button>
            </div>

            <div className="h-2 w-[232px]"></div>

            {/* Scroller */}
            <div className="ml-2 h-full w-full items-center justify-center pr-[10px] ">
                <div className=" flex h-12 items-center pr-2 text-base">
                    <Button className={'h-full w-56'}>
                        <div className="mr-3 flex h-8 w-8 items-center">
                            <FriendIcon />
                        </div>
                        Friends
                    </Button>
                </div>

                <div className="flex h-12 items-center pr-2 text-base">
                    <Button className={'h-full w-56'}>
                        <div className="mr-3 flex h-8 w-8 items-center">
                            {' '}
                            <NitroIcon />
                        </div>
                        Nitro
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;
