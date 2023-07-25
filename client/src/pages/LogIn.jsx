import { auth, db, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import routes from '../config';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../features/userSlice';
import styles from '../styles';

function LogIn() {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    var name = '';
    const id = user?.uid;
    if (user) {
        name = user.displayName;
    }
    if (user) {
        db.collection('users')
            .doc(`${id}`)
            .get()
            .then((doc) => {
                return (name = doc.data()?.username);
            });
    }
    const setUser = () => {
        dispatch(
            setUserInfo({
                username: name,
                userId: id,
            }),
        );
    };
    const logIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                navigate(routes.home);

                //Add user to database
                db.collection('users').doc(userCredential.user.uid).set({
                    username: userCredential.user.displayName,
                    userId: userCredential.user.uid,
                    userPhotoURL: userCredential.user.photoURL,
                    userEmail: userCredential.user.email,
                });
                db.collection('users').doc(userCredential.user.uid).collection('friends').add({});
                db.collection('users').doc(userCredential.user.uid).collection('pendingFriends').add({});
            })
            .catch((error) => alert(error.message));
        setUser();
        navigate(routes.serverChannel);
    };

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailLogin = (e) => {
        const emailValue = e.target.value;
        if (!emailValue.startsWith(' ')) {
            setEmail(emailValue);
        }
    };
    const handlePasswordLogin = (e) => {
        const passwordValue = e.target.value;
        if (!passwordValue.startsWith(' ')) {
            setPassword(passwordValue);
        }
    };

    return (
        <div className={`${styles.signInDefault}`}>
            <div className={`${styles.signInContentDefault} h-max`}>
                <button
                    className={`${styles.signInBtnDefault}`}
                    onClick={
                        !user
                            ? logIn
                            : () => {
                                  setUser();
                                  navigate(routes.serverChannel);
                              }
                    }
                >
                    {!user ? 'Login with Google' : 'Open discord'}
                </button>
                {!user ? (
                    <div className={`${styles.inputBoxDefault}`}>
                        <form className={`${styles.inputFormDefault}`} onSubmit={signIn}>
                            <h1 className={`${styles.signInTitleDefault}`}>
                                Login with email
                            </h1>
                            <div className={`${styles.inputContentDefault}`}>
                                Enter your email
                                <input
                                    className={`${styles.inputDefault}`}
                                    type="email"
                                    value={email}
                                    onChange={handleEmailLogin}
                                ></input>
                            </div>
                            <div className={`${styles.inputContentDefault}`}>
                                Enter your password
                                <input
                                    className={`${styles.inputDefault}`}
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordLogin}
                                ></input>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className={`${styles.signInBtnDefault} h-2/3 w-1/2 mx-10   `} type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    ' '
                )}
            </div>
        </div>
    );
}

export default LogIn;
