import { useNavigate } from 'react-router-dom';
import routes from '../config';
import Button from '../components/Button';
import styles from '../styles';
function Hero() {
    const navigate = useNavigate();
    return (
        <div className={`${styles.signInDefault}`}>
            <div className={`${styles.signInContentDefault} `}>
                <div className="text-textHovered flex h-20 w-full items-center justify-center text-xl">
                    Already have an account?
                </div>
                <div className="flex h-40 w-full flex-col justify-center">
                    <div className="flex h-20 w-full" onClick={() => navigate(routes.logIn)}>
                        <Button className={`${styles.signInBtnDefault}`}>Login</Button>
                    </div>
                    <div className="flex h-20 w-full" onClick={() => navigate(routes.signUp)}>
                        <Button className={`${styles.signInBtnDefault}`}>SignUp</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
