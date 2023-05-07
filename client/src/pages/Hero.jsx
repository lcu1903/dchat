import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import routes from '../config';
function Hero() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then(() => navigate(routes.channel))
            .catch((error) => alert(error.message));
    };
    return (
        <button onClick={!user ? signIn : () => navigate(routes.serverChannel)}> {!user ? 'login' : 'Open discord'} </button>
    );
}

export default Hero;
