import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import FriendItems from './../../Items/FriendItems';
import { useEffect, useState } from 'react';
import { PlusIcon, defaultAvatar } from '../../../img';

function StrangersList() {
    const [user] = useAuthState(auth);

    const userRef = collection(db, 'users');

    const [friends] = useCollection(db.collection('users').doc(user?.uid).collection('friends'));

    const friendList = friends?.docs.map((doc) => {
        return doc.id;
    });
    const [strangersList, setStrangersList] = useState([]);

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
        <div className="bg-sidebar mt-1 h-full w-[50vw] overflow-auto">
            {strangersList?.map((elements) => {
                return (
                    <div className="flex items-center pb-1 pr-3" key={elements.id}>
                        <FriendItems name={elements.name} avatar={elements.avatar} />
                        <button
                            className="friend-button bg-greenLime hover:bg-green "
                            onClick={() => console.log('add')}
                        >
                            <PlusIcon />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default StrangersList;
