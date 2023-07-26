import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';
import { useEffect, useState } from 'react';
import FriendItems from '../../Items/FriendItems';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { defaultAvatar } from '../../../img';
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
          
            var countList = sentList.length;
            querySnapshot.then((doc) => {
                doc.docs.map((doc) => {
                    var avatar = doc.data().userPhotoURL;
                    if (!avatar) {
                        avatar = defaultAvatar;
                    }
                    const id = doc.data().userId;
                    const name = doc.data().username;
                    if (sentFriends.length < countList) {
                        return setSentFriends((prev) => [...prev, { avatar, id, name }]);
                    }
                    return 0;
                });
            });
        }
    });
    return (
        <div>
            {sentFriends.map((elements) => {
                return <FriendItems key={elements.id} name={elements.name} avatar={elements.avatar}></FriendItems>;
            })}
        </div>
    );
}

export default SentFriendRequests;
