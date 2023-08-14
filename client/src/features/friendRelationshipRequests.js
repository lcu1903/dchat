import { db } from '../firebase';

const handleAddFriend = async (friendId, userId) => {
    await db.collection('users').doc(friendId).collection('pendingFriends').doc(userId).set({});

    await db.collection('users').doc(userId).collection('sentFriends').doc(friendId).set({});
};
const handleAcceptFriend = async (friendId, userId) => {
    await db.collection('users').doc(friendId).collection('friends').doc(userId).set({});

    await db.collection('users').doc(userId).collection('friends').doc(friendId).set({});

    await db.collection('users').doc(friendId).collection('sentFriends').doc(userId).delete();

    await db.collection('users').doc(userId).collection('pendingFriends').doc(friendId).delete();
};

const handleDeclineFriend = async (friendId, userId) => {
    await db.collection('users').doc(userId).collection('pendingFriends').doc(friendId).delete();

    await db.collection('users').doc(friendId).collection('sentFriends').doc(userId).delete();
};

const handleRemoveFriend = (friendId, userId) => {
    db.collection('users').doc(friendId).collection('friends').doc(userId).delete();

    db.collection('users').doc(userId).collection('friends').doc(friendId).delete();
};
const handleRemoveSentRequest = async (friendId, userId) => {
    await db.collection('users').doc(userId).collection('sentFriends').doc(friendId).delete();

    await db.collection('users').doc(friendId).collection('pendingFriends').doc(userId).delete();
};

export { handleAcceptFriend, handleAddFriend, handleDeclineFriend, handleRemoveFriend, handleRemoveSentRequest };
