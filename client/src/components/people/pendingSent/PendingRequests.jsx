import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';
import { useEffect, useState } from 'react';
import FriendItems from '../../Items/FriendItems';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { CheckIcon, XIcon, defaultAvatar } from '../../../img';
import { handleAcceptFriend, handleDeclineFriend } from '../../../action/friendRelationshipRequests';

function PendingRequests() {
    const [user] = useAuthState(auth);
    const userRef = collection(db, 'users');
    const [pendingFriends, setPendingFriends] = useState([]);
    const [pending] = useCollection(db.collection('users').doc(user?.uid).collection('pendingFriends'));
    const pendingList = pending?.docs.map((doc) => {
        return doc?.id;
    });
    useEffect(() => {
        if (pendingList) {
            const q = query(userRef, where('userId', 'in', pendingList));
            const querySnapshot = getDocs(q);
            var countList = pendingList.length;
            querySnapshot.then((doc) => {
                doc.docs.map((doc) => {
                    var avatar = doc.data().userPhotoURL;
                    if (!avatar) {
                        avatar = defaultAvatar;
                    }
                    const id = doc.data().userId;
                    const name = doc.data().username;

                    if (pendingFriends.length < countList - 1) {
                        return setPendingFriends((prev) => [...prev, { avatar, id, name }]);
                    }
                    return 0;
                });
            });
        }
    });
    return (
        <div className="list text-itemsTheme hover-shadow-blue-outline  ">
            PENDING
            {pendingFriends.map((elements) => {
                return (
                    <div className="pt-2" key={elements.id}>
                        <FriendItems name={elements.name} avatar={elements.avatar}>
                            <button
                                className="friend-button bg-greenLime hover:bg-green ml-[20%] "
                                onClick={() => {
                                    handleAcceptFriend(elements.id, user.uid);
                                    pendingFriends.splice(pendingFriends.indexOf(elements), 1);
                                }}
                            >
                                <CheckIcon />
                            </button>
                            <button
                                className="friend-button bg-darkerRed hover:bg-red  "
                                onClick={() => {
                                    handleDeclineFriend(elements.id, user.uid);
                                    pendingFriends.splice(pendingFriends.indexOf(elements), 1);
                                }}
                            >
                                <XIcon />
                            </button>
                        </FriendItems>
                    </div>
                );
            })}
        </div>
    );
}

export default PendingRequests;
