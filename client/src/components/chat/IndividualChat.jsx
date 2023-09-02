import SidebarProfile from './../Sidebar/SidebarProfile';

import styles from '../../styles';
import { useSelector } from 'react-redux';
import { selectUserChatId, selectUserChatName } from '../../reducer/chatUserSlice';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import routes from '../../config';
import { useCollection } from 'react-firebase-hooks/firestore';
import { selectUserId, selectUserName } from '../../reducer/userSlice';
import firebase from 'firebase/compat/app';
import Message from './../Message';
import { PlusIcon } from '../../img';


function IndividualChat() {
    const chatName = useSelector(selectUserChatName);
    const chatId = useSelector(selectUserChatId);
    const userId = useSelector(selectUserId);
    const userName = useSelector(selectUserName);

    const [chatAvatar, setChatAvatar] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const navigate = useNavigate();

    const redirect = useEffect(() => {
        !chatName && navigate(routes.serverChannel);
    });

    useEffect(() => {
        if (chatId) {
            db.collection('users')
                .doc(chatId)
                .get()
                .then((doc) => {
                    setChatAvatar(doc.data().userPhotoURL);
                });
            db.collection('users')
                .doc(userId)
                .get()
                .then((doc) => {
                    setUserAvatar(doc.data().userPhotoURL);
                });
        }
    }, [chatId,userId]);

    const inputRef = useRef('');
    const chatRef = useRef(null);

    const [message] = useCollection(
        chatId &&
            userId &&
            db
                .collection('users')
                .doc(userId)
                .collection('conversations')
                .doc(chatId)
                .collection('message')
                .orderBy('timestamp', 'asc'),
    );

    const sendMessage = (e) => {
        e.preventDefault();

        if (inputRef.current.value !== '') {
            db.collection('users').doc(userId).collection('conversations').doc(chatId).collection('message').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: inputRef.current.value,
                name: userName,
                photoURL: userAvatar,
                sentUserId: userId,
            });
            db.collection('users').doc(chatId).collection('conversations').doc(userId).collection('message').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: inputRef.current.value,
                name: userName,
                photoURL: userAvatar,
                sentUserId: userId,
            });
        }
        inputRef.current.value = '';
        scrollToBottom();
    };

    const scrollToBottom = () => {
        chatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <div className={`flex`}>
            {redirect}
            <div>
                <SidebarProfile />
            </div>
            <div className="bg-content">
                <header className={`bg-content ${styles.contentWidth}`}>
                    <div className={styles.headerDefault}>
                        <p className="flex">
                            <img src={chatAvatar} alt="" className="mx-2 h-6 rounded-full"></img>
                            <span className="text-textHovered">{chatName}</span>
                        </p>
                    </div>
                </header>
                <article className="flex">
                    <div className={`scrollbar-hide flex-grow overflow-y-scroll ${styles.chatHeight}`}>
                        {message?.docs.map((doc) => {
                            const { message, timestamp, name, photoURL, sentUserId } = doc.data();
                            return (
                                <Message
                                    key={doc.id}
                                    id={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    name={name}
                                    photoURL={photoURL}
                                    sentUserId={sentUserId}
                                />
                            );
                        })}
                        <div ref={chatRef} className="pb-16"></div>
                    </div>
                </article>
                <div
                    className={`bg-ChatInput ${styles.chatInputWidth} mx-3 mb-5 flex h-12 items-center rounded-lg p-2.5 `}
                >
                    <div className=" px-2 py-1 ">
                        <PlusIcon className={`bg-text hover:bg-textHovered rounded-full `} />
                    </div>
                    <div>
                        <form className="flex-grow">
                            <input
                                className={`placeholder:text-blurMessage text-text break-words 
                                        bg-transparent py-[11px] pr-[10px] text-sm focus:outline-none ${styles.chatMessageWidth}`}
                                type="text"
                                placeholder={`Message #${chatName}`}
                                ref={inputRef}
                            />
                            <button hidden type="submit" onClick={sendMessage}>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndividualChat;
