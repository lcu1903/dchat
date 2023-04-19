import { FriendIcon, HelpIcon, InboxIcon } from '../img';
import Tippy from '@tippyjs/react';
import styles from '../styles';
import Button from './Button';
import Divider from './Divider';
function Header() {
    return (
        <section className={`${styles.boxHeight} relative flex  px-2 text-5xl shadow`}>
            <div className="relative flex h-full w-full items-center overflow-hidden text-base ">
                <div className="pointer-events-none flex  px-[7px]">
                    <div className="px-[7px]">
                        <FriendIcon className="text-friendIcon" />
                    </div>
                    <span className="text-textHovered font-semibold">Friends</span>
                </div>
                <Divider width={'[0.5px]'} height={'6'} />
                <Button>Online</Button>
                <Button>All</Button>
                <Button>Pending</Button>
                <Button>Blocked</Button>
                <Button bgColor={styles.greenLime} color={styles.textHovered}>
                    Add Friend
                </Button>
            </div>
            <div className=" bg-content text-text flex shadow-2xl ">
                <div className="w-10">
                    <InboxIcon />
                </div>
                <div className="w-10">
                    <HelpIcon />
                </div>
            </div>
            
        </section>
        
    );
}
export default Header;
