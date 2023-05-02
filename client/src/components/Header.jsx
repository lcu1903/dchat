import { FriendIcon, HelpIcon, InboxIcon } from '../img';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from '../styles';
import Button from './Button';

import React, { useEffect } from 'react';

import routes from '../config';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const redirect = useEffect(() => {
        !user && navigate(routes.home);
    });
    return (
        <>
            {redirect}
            <section className={`${styles.boxHeight}  font-fontDisplay  flex px-2 shadow`}>
                <div className=" flex h-full w-full items-center overflow-hidden  ">
                    {/* FriendIcon */}
                    <div className="pointer-events-none flex px-[7px]">
                        <div className="px-[7px]">
                            <FriendIcon className="text-friendIcon " />
                        </div>
                        <span className="text-textHovered font-semibold">Friends</span>
                    </div>

                    {/* Divider */}
                    <div className={` bg-divider mx-2 h-6 w-[1px] `}></div>

                    {/*  */}
                    <Button hoverBackground={'hovered'}>Online</Button>
                    <Button hoverBackground={'hovered'}>All</Button>
                    <Button hoverBackground={'hovered'}>Pending</Button>
                    <Button hoverBackground={'hovered'}>Blocked</Button>
                    <Button bgColor={styles.greenLime} color={styles.textHovered}>
                        Add Friend
                    </Button>
                </div>
                <div className=" bg-content text-text flex h-full w-[100px] items-center justify-between shadow-2xl ">
                    <div className="flex items-center">
                        <Tippy
                            render={(attrs) => (
                                <div tabIndex="-1" {...attrs} className="tippy-box font-fontDisplay font-semibold ">
                                    {' '}
                                    Inbox{' '}
                                </div>
                            )}
                            placement="bottom"
                        >
                            <button>
                                <InboxIcon />
                            </button>
                        </Tippy>
                    </div>
                    <Tippy
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs} className="tippy-box font-fontDisplay font-semibold ">
                                Help
                            </div>
                        )}
                        delay={[0, 50]}
                        placement="bottom"
                        interactive
                    >
                        <a href="https://support.discord.com/hc/en-us" className="w-10">
                            <HelpIcon />
                        </a>
                    </Tippy>
                </div>
            </section>
        </>
    );
}
export default Header;
