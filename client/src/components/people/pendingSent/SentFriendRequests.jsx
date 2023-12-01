import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';
import { useEffect, useState } from 'react';
import FriendItems from '../../Items/FriendItems';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { XIcon, defaultAvatar } from '../../../img';
import { handleRemoveSentRequest } from '../../../action/friendRelationshipRequests';

function SentFriendRequests() {
    const [user] = useAuthState(auth);
    const userRef = collection(db, 'users');

    const [sentFriends, setSentFriends] = useState([]);

    const [sent] = useCollection(db.collection('users').doc(user?.uid).collection('sentFriends'));
    const sentList = sent?.docs.map((doc) => {
        return doc.id;
    });
    useEffect(() => {
        if (sentList) {
            const q = query(userRef, where('userId', 'in', sentList));
            const querySnapshot = getDocs(q);
            querySnapshot.then((doc) => {
                doc.docs.map((doc) => {
                    var avatar = doc.data().userPhotoURL;
                    if (!avatar) {
                        avatar = defaultAvatar;
                    }
                    const id = doc.data().userId;
                    const name = doc.data().username;
                    if (sentFriends.length < sentList.length - 1) {
                        return setSentFriends((prev) => [...prev, { avatar, id, name }]);
                    }
                    return 0;
                });
            });
        }
    });
    return (
        <div className="list text-itemsTheme hover-shadow-blue-outline">
            SENT
            {sentFriends.map((elements) => {
                return (
                    <FriendItems name={elements.name} avatar={elements.avatar} key={elements.id}>
                        <button
                            className="friend-button bg-darkerRed hover:bg-red ml-[25%]     "
                            onClick={() => {
                                handleRemoveSentRequest(elements.id, user.uid);
                                sentFriends.splice(sentFriends.indexOf(elements), 1);
                            }}
                        >
                            <XIcon />
                        </button>
                    </FriendItems>
                );
            })}
        </div>
    );
}

export default SentFriendRequests;
