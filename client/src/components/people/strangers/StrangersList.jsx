import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import FriendItems from './../../Items/FriendItems';
import { useEffect, useState } from 'react';
import { PlusIcon, defaultAvatar } from '../../../img';
import { handleAddFriend } from '../../../action/friendRelationshipRequests';

function StrangersList() {
    const [user] = useAuthState(auth);

    const userRef = collection(db, 'users');

    const [friends] = useCollection(db.collection('users').doc(user?.uid).collection('friends'));

    const friendList = friends?.docs.map((doc) => {
        return doc.id;
    });
    const [strangersList, setStrangersList] = useState([]);

    const [pending] = useCollection(db.collection('users').doc(user?.uid).collection('pendingFriends'));
    const pendingList = pending?.docs.map((doc) => {
        return doc?.id;
    });

    const [sent] = useCollection(db.collection('users').doc(user?.uid).collection('sentFriends'));
    const sentList = sent?.docs.map((doc) => {
        return doc.id;
    });

    useEffect(() => {
        if (friendList) {
            const q = query(userRef, where('userId', 'not-in', friendList));

            const querySnapshot = getDocs(q);

            querySnapshot.then((doc) => {
                // doc.data() is never undefined for query doc snapshots
                doc.docs.map((doc) => {
                    var avatar = doc.data().userPhotoURL;
                    if (!avatar) {
                        avatar = defaultAvatar;
                    }
                    const id = doc.data().userId;
                    const name = doc.data().username;
                    var countList = 0;
                    countList += 1;
                    if (strangersList.length < countList && user.uid !== id) {
                        return setStrangersList((prev) => [...prev, { avatar, id, name }]);
                    }
                    return 0;
                });
            });
        }
    });

    return (
        <div className="friend-list list text-itemsTheme hover-shadow-blue-outline mt-2  max-w-[50vw]">
            PEOPLE YOU MAY KNOW
            {strangersList?.map((elements) => {
                return (
                    <div className="flex items-center pb-2 pr-3 pt-1 " key={elements.id}>
                        <FriendItems name={elements.name} avatar={elements.avatar}>
                            {pendingList.includes(elements.id) || sentList.includes(elements.id) ? (
                                <button
                                    className="friend-button bg-greenLime text-textHovered ml-[25%] rounded-sm   "
                                    onClick={() => {
                                        handleAddFriend(elements.id, user.uid);
                                        strangersList.splice(strangersList.indexOf(elements), 1);
                                    }}
                                    disabled={true}
                                >
                                    <PlusIcon />
                                </button>
                            ) : (
                                <button
                                    className="friend-button bg-greenLime hover:bg-green text-textHovered ml-[25%] rounded-sm   "
                                    onClick={() => {
                                        handleAddFriend(elements.id, user.uid);
                                        strangersList.splice(strangersList.indexOf(elements), 1);
                                    }}
                                >
                                    <PlusIcon />
                                </button>
                            )}
                        </FriendItems>
                    </div>
                );
            })}
        </div>
    );
}

export default StrangersList;
