import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';

import { useCollection } from 'react-firebase-hooks/firestore';

import FriendItems from '../../Items/FriendItems';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { defaultAvatar } from '../../../img';
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

                    if (allFriendList.length < friendList.length) {
                        return setAllFriendList((prev) => [...prev, { avatar, id, name }]);
                    }
                    return 0;
                });
            });
        }
    });

    return (
        <div className="friend-list list text-itemsTheme hover-shadow-blue-outline mt-1 max-h-[75vh] min-h-[20vh] overflow-auto pb-1 pr-1">
            YOUR FRIENDS
            {allFriendList?.map((elements) => {
                return <FriendItems key={elements.id} name={elements.name} avatar={elements.avatar} />;
            })}
        </div>
    );
}

export default AllFriends;
