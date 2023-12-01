import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { useEffect, useState } from 'react';

import { RemoveFriendIcon, defaultAvatar } from '../../../img';
import { handleRemoveFriend } from '../../../action/friendRelationshipRequests';

import FriendItems from '../../Items/FriendItems';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserChatInfo } from '../../../reducer/chatUserSlice';
import YesNoModal from '../../modal/YesNoModal';

function AllFriends() {
    const navigate = useNavigate();

    const [user] = useAuthState(auth);
    const userRef = collection(db, 'users');

    const [friends] = useCollection(db.collection('users').doc(user?.uid).collection('friends'));
    const friendList = friends?.docs.map((doc) => {
        return doc.id;
    });

    const [allFriendList, setAllFriendList] = useState([]);

    const [showYesNoModal, setShowYesNoModal] = useState(false);
    const handleCloseYesNoModal = () => setShowYesNoModal(false);
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

    const dispatch = useDispatch();

    const setChatUser = (name, id) => {
        dispatch(
            setUserChatInfo({
                userChatName: name,
                userChatId: id,
            }),
        );
    };

    const IndividualChat = (id) => {
        navigate(`/channel/@me/${id}`);
    };
    const [friendRemoveId, setFriendRemoveId] = useState();
    const [yesClicked, setYesClicked] = useState(false);
    const handleClickRemoveFriend = (id, friendId, elements) => {
        setFriendRemoveId(friendId);
        setShowYesNoModal(true);
    };

    if (yesClicked) {
        let tempRemoveFriendObj = (allFriendList.filter((elements) => elements.id === friendRemoveId))
        allFriendList.splice(allFriendList.indexOf(tempRemoveFriendObj[0]), 1);
        handleRemoveFriend(friendRemoveId, user.uid);
    }
    return (
        <div className="friend-list list text-itemsTheme hover-shadow-blue-outline mt-2  overflow-auto">
            YOUR FRIENDS
            {allFriendList?.map((elements) => {
                return (
                    <div key={elements.id}>
                        <FriendItems
                            name={elements.name}
                            avatar={elements.avatar}
                            onClick={() => {
                                IndividualChat(elements.id);
                                setChatUser(elements.name, elements.id);
                            }}
                        ></FriendItems>
                        <button
                            className=" friend-button bg-darkerRed hover:bg-red fixed left-[35%] ml-[25%] mt-[-2.55rem] w-[100px] "
                            onClick={() => {
                                handleClickRemoveFriend(user.uid, elements.id, elements);
                            }}
                        >
                            <RemoveFriendIcon />
                        </button>
                    </div>
                );
            })}
            <YesNoModal
                visible={showYesNoModal}
                onClose={handleCloseYesNoModal}
                id={friendRemoveId}
                yesClicked={setYesClicked}
            ></YesNoModal>
        </div>
    );
}

export default AllFriends;
