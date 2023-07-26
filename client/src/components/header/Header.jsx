import { FriendIcon, HelpIcon, InboxIcon } from '../../img';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from '../../styles';
import Button from '../Button';

import React, { useContext, useEffect } from 'react';

import routes from '../../config';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { FriendListContext } from '../../contexts/FriendlistContext';

function Header() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const redirect = useEffect(() => {
        !user && navigate(routes.home);
    });

    const friendListComponent = useContext(FriendListContext);

    return (
        <>
            {redirect}
            <section className={`${styles.headerDefault}`}>
                <div className=" flex w-full flex-nowrap items-center overflow-hidden  ">
                    {/* FriendIcon */}
                    <div className="pointer-events-none flex px-[7px]">
                        <div className="px-[7px]">
                            <FriendIcon className="text-friendIcon " />
                        </div>
                        <span className="text-textHovered font-semibold">Friends</span>
                    </div>

                    {/* Divider */}
                    <div className={`divider bg-divider mx-2 h-6 w-[1px] `}></div>

                    {/*  */}
                    <Button
                        className={'mx-2'}
                        onClick={() => {
                            friendListComponent.handleAllFriendListClicked();
                        }}
                    >
                        All
                    </Button>
                    <Button
                        className={'mx-2'}
                        onClick={() => {
                            friendListComponent.handlePendingSentFriendListClicked();
                        }}
                    >
                        Pending - Sent
                    </Button>
                    <Button
                        className={'mx-2'}
                        onClick={() => {
                            friendListComponent.handleSuggestFriendClicked();
                        }}
                    >
                        Suggests
                    </Button>
                    <Button className={'mx-2'} bgColor={styles.greenLime} color={styles.textHovered}>
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
