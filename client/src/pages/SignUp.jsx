import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles';

function SignUp() {
    const navigate = useNavigate();
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                db.collection('users').doc(userCredential.user.uid).set({
                    username: username,
                    userId: userCredential.user.uid,
                    userPhotoURL:
                        'https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg',
                    userEmail: email,
                });
                db.collection('users').doc(userCredential.user.uid).collection('friends').add({});
                db.collection('users').doc(userCredential.user.uid).collection('pendingFriends').add({});

                setEmail('');
                setPassword('');
                setUsername('');
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleEmailSignUp = (e) => {
        const emailValue = e.target.value;
        if (!emailValue.startsWith(' ')) {
            setEmail(emailValue);
        }
    };
    const handlePasswordSignUp = (e) => {
        const passwordValue = e.target.value;
        if (!passwordValue.startsWith(' ')) {
            setPassword(passwordValue);
        }
    };
    const handleUsernameSignUp = (e) => {
        const usernameValue = e.target.value;
        if (!usernameValue.startsWith(' ')) {
            setUsername(usernameValue);
        }
    };
    return (
        <div className={`${styles.signInDefault}`}>
            <div className={`${styles.signInContentDefault}`}>
                <form className={`${styles.inputFormDefault}`} onSubmit={signUp}>
                    <h1 className={`${styles.signInTitleDefault}`}>Create account</h1>
                    <div className={`${styles.inputBoxDefault}`}>
                        <div className={`${styles.inputContentDefault}`}>
                            Enter your email
                            <input
                                className={`${styles.inputDefault}`}
                                type="email"
                                value={email}
                                onChange={handleEmailSignUp}
                            ></input>
                        </div>
                        <div className={`${styles.inputContentDefault}`}>
                            Enter your password
                            <input
                                className={`${styles.inputDefault}`}
                                type="password"
                                value={password}
                                onChange={handlePasswordSignUp}
                            ></input>
                        </div>
                        <div className={`${styles.inputContentDefault}`}>
                            Enter your username
                            <input
                                className={`${styles.inputDefault}`}
                                type="username"
                                value={username}
                                onChange={handleUsernameSignUp}
                            ></input>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className={`${styles.signInBtnDefault} mx-10 h-2/3 w-1/2  `} type="submit">
                                Sign up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
