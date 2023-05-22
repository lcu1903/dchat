import Button from './Button';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { HeadphoneIcon, OffHeadphoneIcon, OffMicIcon, OnMicIcon, SettingsIcon } from '../img';
import { useState } from 'react';

function User() {
    const navigate = useNavigate();

    const [user] = useAuthState(auth);
    const handleSignOutClicked = () => {
        auth.signOut();
        navigate('/');
    };

    const ToggleButtonOnOff = () => {
        const [isOff, setIsOff] = useState(true);

        return <button onClick={() => setIsOff(!isOff)}>{isOff ? <OnMicIcon /> : <OffMicIcon />}</button>;
    };
    const ToggleHeadphoneOnOff = () => {
        const [isOff, setIsOff] = useState(true);
        return <button onClick={() => setIsOff(!isOff)}>{isOff ? <HeadphoneIcon /> : <OffHeadphoneIcon />}</button>;
    };
    var avatarSrc = user?.photoURL;
    return (
        <div className={`bg-UserBg text-text flex h-[52px] w-[120px] min-w-[240px] items-center px-2 `}>
            <Button className={'mr-1 flex h-10  w-14 max-w-[132px] p-0 text-sm'}>
                <img
                    src={avatarSrc}
                    alt=""
                    className="mr-1 flex h-8 w-8 justify-end rounded-full"
                    onClick={handleSignOutClicked}
                ></img>
                <div className="pl-1">
                    <div className="text-textHovered">{user?.displayName.slice(0, 8)}...</div>
                    <div className="text-xs">{user?.uid.slice(0, 8)}...</div>
                </div>
            </Button>
            <div className="flex h-8 w-8">
                <Button className={'h-8 w-8 p-0'}>
                    <ToggleButtonOnOff />
                </Button>
                <Button className={'h-8 w-8 p-0'}>
                    <ToggleHeadphoneOnOff />
                </Button>
                <Button className={'h-8 w-8 p-0'}>
                    <SettingsIcon />
                </Button>
            </div>
        </div>
    );
}

export default User;
