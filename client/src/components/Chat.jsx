import { useSelector } from 'react-redux';
import { PlusIcon } from '../img';
import styles from '../styles';
import { selectChannelId, selectChannelName, selectServerId } from '../features/channelSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { useRef } from 'react';
import firebase from 'firebase/compat/app';
import { useCollection } from 'react-firebase-hooks/firestore';
import Message from './Message';
function Chat() {
    const channelName = useSelector(selectChannelName);
    const channelId = useSelector(selectChannelId);
    const serverId = useSelector(selectServerId);
    const [user] = useAuthState(auth);
    const inputRef = useRef('');
    const chatRef = useRef(null);
    const [message] = useCollection(
        serverId &&
            channelId &&
            db
                .collection('serverItems')
                .doc(serverId)
                .collection('channels')
                .doc(channelId)
                .collection('message')
                .orderBy('timestamp', 'asc'),
    );

    const sendMessage = (e) => {
        e.preventDefault();

        if (inputRef.current.value !== '') {
            db.collection(`serverItems`)
                .doc(`${serverId}`)
                .collection('channels')
                .doc(`${channelId}`)
                .collection('message')
                .add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    message: inputRef.current.value,
                    name: user?.displayName,
                    photoURL: user?.photoURL,
                    email: user?.email,
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
        <div className="max-h-2">
            <div className={`scrollbar-hide flex-grow overflow-y-scroll ${styles.chatHeight}`}>
                {message?.docs.map((doc) => {
                    const { message, timestamp, name, photoURL, email } = doc.data();
                    return (
                        <Message
                            key={doc.id}
                            id={doc.id}
                            message={message}
                            timestamp={timestamp}
                            name={name}
                            email={email}
                            photoURL={photoURL}
                        />
                    );
                })}
                <div ref={chatRef} className="pb-16"></div>
            </div>

            <div className={`bg-ChatInput ${styles.chatInputWidth} mx-3 mb-5 flex h-12 items-center rounded-lg p-2.5`}>
                <div className=" px-2 py-1 ">
                    <PlusIcon className={`bg-text hover:bg-textHovered rounded-full `} />
                </div>
                <div>
                    <form className="flex-grow">
                        <input
                            className={`placeholder:text-blurMessage text-text break-words 
                                    bg-transparent py-[11px] pr-[10px] text-sm focus:outline-none ${styles.chatMessageWidth}`}
                            type="text"
                            disabled={!channelId}
                            placeholder={channelId ? `Message #${channelName}` : 'Select a channel'}
                            ref={inputRef}
                        />
                        <button hidden type="submit" onClick={sendMessage}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Chat;
