import { FriendIcon, NitroIcon } from '../../img';
import styles from '../../styles';
import Button from '../Button';
import User from '../Items/User';

function SidebarProfile() {
    return (
        <div className={`${styles.sidebarDefault}`}>
            {/* SearchBar */}

            <div>
                <div className={`${styles.sidebarHeaderDefault}`}>
                    <button
                        className={`bg-inboxCol flex h-7 w-[220px] items-center rounded-[4px]  px-[6px] py-[1px] text-sm`}
                    >
                        Find or start a conversation
                    </button>
                </div>

                {/* Scroller */}
                <div className={`${styles.sidebarContentDefault}`}>
                    <div className="h-2 w-full"></div>
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
            <div>
                <User />
            </div>
        </div>
    );
}
export default SidebarProfile;
