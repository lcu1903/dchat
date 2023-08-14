import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';

import { useCollection } from 'react-firebase-hooks/firestore';

import FriendItems from '../../Items/FriendItems';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { RemoveFriendIcon, defaultAvatar } from '../../../img';
import { handleRemoveFriend } from '../../../features/friendRelationshipRequests';

import React from 'react';

function AllFriends() {
    const [user] = useAuthState(auth);

    const userRef = collection(db, 'users');

    const [friends] = useCollection(db.collection('users').doc(user?.uid).collection('friends'));

    const friendList = friends?.docs.map((doc) => {
        return doc.id;
    });

    const [allFriendList, setAllFriendList] = useState([]);
    useEffect(() => {
        if (friendList) {
            const q = query(userRef, where('userId', 'in', friendList));
            const querySnapshot = getDocs(q);
            querySnapshot.then((doc) => {
                doc.docs.map((doc) => {
                    var avatar = doc.data().userPhotoURL;
                    if (!avatar) {
                        avatar = defaultAvatar;
                    }
                    const id = doc.data().userId;
                    const name = doc.data().username;

                    if (allFriendList.length < friendList.length - 1) {
                        return setAllFriendList((prev) => [...prev, { avatar, id, name }]);
                    }
                    return 0;
                });
            });
        }
    });

    return (
        <div className="friend-list list text-itemsTheme hover-shadow-blue-outline mt-2  overflow-auto">
            YOUR FRIENDS
            {allFriendList?.map((elements) => {
                return (
                    <FriendItems key={elements.id} name={elements.name} avatar={elements.avatar}>
                        <button
                            className="friend-button bg-darkerRed hover:bg-red ml-[25%] "
                            onClick={() => {
                                handleRemoveFriend(elements.id, user.uid);
                                allFriendList.splice(allFriendList.indexOf(elements), 1);
                            }}
                        >
                            <RemoveFriendIcon />
                        </button>
                    </FriendItems>
                );
            })}
        </div>
    );
}

export default AllFriends;
