import { auth, db, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import routes from '../config';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../reducer/userSlice';
import styles from '../styles';

function LogIn() {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username,setUsername] = useState();
   

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user.uid)
                .get()
                .then((doc) => {
                    setUsername(doc.data()?.username)
                });
        }
    });

   
    const setUser = () => {
        dispatch(
            setUserInfo({
                username: username,
                userId: user?.uid,
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
                db.collection('users').doc(userCredential.user.uid).collection('sentFriends').add({});
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
            <div className={`${styles.signInContentDefault} h-max shadow-2xl`}>
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
                            <h1 className={`${styles.signInTitleDefault}`}>Login with email</h1>
                            <div className={`${styles.inputContentDefault} relative `}>
                                <input
                                    className={`${styles.inputDefault} peer `}
                                    type="email"
                                    value={email}
                                    onChange={handleEmailLogin}
                                    placeholder=" "
                                ></input>
                                <label
                                    className="peer-focus:text-itemsTheme pointer-events-none  absolute top-2
                                    ml-0 origin-[0] -translate-y-4  scale-75
                                    px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100  peer-focus:top-2 
                                    peer-focus:ml-0 peer-focus:-translate-y-4 peer-focus:scale-75
                                   
                                    "
                                >
                                    {' '}
                                    Your email
                                </label>
                            </div>

                            <div className={`${styles.inputContentDefault} relative`}>
                                <input
                                    className={`${styles.inputDefault} peer`}
                                    type="password"
                                    value={password}
                                    placeholder=" "
                                    onChange={handlePasswordLogin}
                                ></input>
                                <label
                                    className="peer-focus:text-itemsTheme pointer-events-none  absolute top-2
                                    ml-0 origin-[0] -translate-y-4  scale-75
                                    px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100  peer-focus:top-2 
                                    peer-focus:ml-0 peer-focus:-translate-y-4 peer-focus:scale-75 "
                                >
                                    {' '}
                                    Your password
                                </label>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className={`${styles.signInBtnDefault} mx-10 h-2/3 w-1/2   `} type="submit">
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
