import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';
import { useEffect, useState } from 'react';
import FriendItems from '../../Items/FriendItems';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { defaultAvatar } from '../../../img';

function PendingRequests() {
    const [user] = useAuthState(auth);
    const userRef = collection(db, 'users');
    const [pendingFriends, setPendingFriends] = useState([]);
    const [pending] = useCollection(db.collection('users').doc(user?.uid).collection('pendingFriends'));
    const pendingList = pending?.docs.map((doc) => {
        return doc.id;
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
                    
                    if (pendingFriends.length < countList) {
                        return setPendingFriends((prev) => [...prev, { avatar, id, name }]);
                    }
                    return 0;
                });
            });
        }
    });
    return (
        <div>
            {pendingFriends.map((elements) => {
                return <FriendItems key={elements.id} name={elements.name} avatar={elements.avatar}></FriendItems>;
            })}
        </div>
    );
}

export default PendingRequests;
