import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';

import { useCollection } from 'react-firebase-hooks/firestore';

import FriendItems from '../../Items/FriendItems';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
function AllFriends() {
    const [user] = useAuthState(auth);

    const userRef = collection(db, 'users');

    const [friends] = useCollection(db.collection('users').doc(user?.uid).collection('friends'));

    const friendList = friends?.docs.map((doc) => {
        return doc.id;
    });

    const [allFriendList, setAllFriendList] = useState([]);

    if (friendList) {
        const q = query(userRef, where('userId', 'in', friendList));
        const querySnapshot = getDocs(q);
        querySnapshot.then((doc) => {
            doc.docs.map((doc) => {
                var avatar = doc.data().userPhotoURL;
                if (!avatar) {
                    avatar =
                        'https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg';
                }
                const id = doc.data().userId;
                const name = doc.data().username;

                return setAllFriendList((prev) => [...prev, { avatar, id, name }]);
            });
        });
    }

    return (
        <div className="mt-1 max-h-[75vh] w-[75vw] overflow-auto pb-1 pr-1">
            {allFriendList?.map((elements) => {
                return <FriendItems key={elements.id} name={elements.name} avatar={elements.avatar} />;
            })}
        </div>
    );
}

export default AllFriends;
